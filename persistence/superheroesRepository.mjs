import fs from 'fs';
import path from 'path';
import SuperheroesDataSource from './superheroesDataSource.mjs';

//se agrego esta pequeña correccion al codigo para poder utilizar: __dirname en archivos.mjs
//desde aqui
import { fileURLToPath } from 'url';

// Obtener __filename en ES Modules
const __filename = fileURLToPath(import.meta.url);

// Obtener __dirname en ES Modules
const __dirname = path.dirname(__filename);
//hasta aqui

export default class SuperheroesFileRepository extends SuperheroesDataSource {

constructor() {
    super();
    this.filePath = path.join(__dirname, '../superheroes.txt');
}

obtenerTodos() {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data);
}

guardar(superheroes){
    fs.writeFileSync(this.filePath, JSON.stringify(superheroes, null, 2));
}
}