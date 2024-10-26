import express from 'express'; 
import { obtenerTodosLosSuperheroes, obtenerSuperheroePorIdController, agregarNuevoSuperheroe, actualizarSuperheroePorId, eliminarSuperheroePorId, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30YConFiltrosController, obtenerSuperheroesMenoresDe30Controller } from './controllers/superheroesController.mjs'; 

const app = express(); 

app.use(express.json()); 

const PORT = 3005; 

// Rutas 
app.get('/superheroes', obtenerTodosLosSuperheroes); 
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController); 
app.post('/superheroes', agregarNuevoSuperheroe); 
app.put('/superheroes/:id', actualizarSuperheroePorId); 
app.delete('/superheroes/:id', eliminarSuperheroePorId); 
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController); 
app.get('/superheroes/filtros/avanzados', obtenerSuperheroesMayoresDe30YConFiltrosController);
app.get('/superheroes/filtros/menores30', obtenerSuperheroesMenoresDe30Controller);
 
// Levantar el servidor en el puerto 3005 
app.listen(PORT, () => { 
console.log(`Servidor corriendo en el puerto ${PORT}`); 
});
