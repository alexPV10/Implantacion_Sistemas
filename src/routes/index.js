const express = require('express');
const router = express.Router();
const estudianteRepository = require('../repositories/EstudianteRepository');
const carreraRepository = require('../repositories/CarreraRepository');

router.get('/', async (request, response) => {
    const lstEstudiantes = await estudianteRepository.obtenerTodosLosEstudiantes();
    console.log('Listado: ', lstEstudiantes);

    response.send('Bienvenido al laboratorio de IMPS');
});

// Endpoint para mostrar todas las carreras
router.get('/', async (request, response) => {
    const lstCarreras = await carreraRepository.obtenerTodasLasCarreras(); // Obtiene todas las carreras desde el repositorio
    console.log('Listado de carreras: ', lstCarreras); // Puedes quitar el `console.log` en producción

    response.send('Bienvenido al laboratorio de IMPS');
});

module.exports = router;