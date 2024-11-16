const pool = require('../config/databaseController');

module.exports = {
    // Obtener todas las carreras
    obtenerTodasLasCarreras: async () => {
        try {
            const result = await pool.query('SELECT * FROM carreras');
            return result;
        } catch (error) {
            console.error('Ocurrió un problema al consultar las carreras: ', error);
        }
    },

    // Insertar una nueva carrera
    insertarCarrera: async (carrera) => {
        try {
            const { idcarrera, nombreCarrera } = carrera;
            const result = await pool.query('INSERT INTO carreras (idcarrera, carrera) VALUES (?, ?)', [idcarrera, nombreCarrera]);
            return result.insertId;
        } catch (error) {
            console.error('Error al insertar la carrera: ', error);
        }
    },

    // Actualizar una carrera existente
    actualizarCarrera: async (idcarrera, nombreCarrera) => {
        try {
            const result = await pool.query('UPDATE carreras SET carrera = ? WHERE idcarrera = ?', [nombreCarrera, idcarrera]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error al actualizar la carrera: ', error);
        }
    },

    // Eliminar una carrera
    eliminarCarrera: async (idcarrera) => {
        try {
            const result = await pool.query('DELETE FROM carreras WHERE idcarrera = ?', [idcarrera]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error al eliminar la carrera: ', error);
        }
    }
};
