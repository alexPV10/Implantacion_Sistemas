const express = require('express');
const router = express.Router();
const queries = require('../repositories/CarreraRepository'); // Cambié el nombre del módulo a CarreraRepository

// Endpoint para mostrar todas las carreras
router.get('/', async (request, response) => {
    const carreras = await queries.obtenerTodasLasCarreras(); // Cambié el método a "obtenerTodasLasCarreras"
    response.render('carreras/listado', {carreras}); // Renderizamos el listado de carreras
});

// Endpoint que permite mostrar el formulario para agregar una nueva carrera
router.get('/agregar', async(request, response) => {
    response.render('carreras/agregar'); // Renderizamos el formulario
});

// Endpoint para agregar una carrera
router.post('/agregar', async(request, response) => {
    const { idcarrera, carrera, opcion } = request.body; // Extraemos los datos del formulario
    const resultado = await queries.insertarCarrera({ idcarrera, carrera, opcion }); // Usamos "insertarCarrera"
    if (resultado) {
        console.log('Carrera agregada con éxito');
        response.redirect('/carreras'); // Redireccionamos a la lista de carreras
    } else {
        console.error('Error al agregar la carrera');
        response.render('carreras/agregar', { error: 'No se pudo agregar la carrera' }); // Muestra un mensaje de error
    }
});

// Endpoint que permite eliminar una carrera
router.get('/eliminar/:idcarrera', async(request, response) => {
    const { idcarrera } = request.params;
    const resultado = await queries.eliminarCarrera(idcarrera); // Usamos "eliminarCarrera"
    if (resultado) {
        console.log('Carrera eliminada con éxito');
    }
    response.redirect('/carreras'); // Redireccionamos a la lista de carreras
});

module.exports = router;
