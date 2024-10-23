# DiplomaturaFullStackModulo3TP4
se crea repo para subir el TP4 del Modulo 3

//se agrego en superheroesRepository.mjs esta pequeña correccion al codigo para poder utilizar: __dirname en archivos.mjs
//desde aqui
import { fileURLToPath } from 'url';

// Obtener __filename en ES Modules
const __filename = fileURLToPath(import.meta.url);

// Obtener __dirname en ES Modules
const __dirname = path.dirname(__filename);
//hasta aqui