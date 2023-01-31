import {pool} from '../../database/conexion.js';

class ParticipanteModelo{

    getAll= async() =>{
        const [rows] = await pool.query('SELECT * FROM participante')
        return rows;
    }

    getOne = async(id) =>{
        const [rows] = await pool.query('SELECT * FROM participante where participante_id = ?',  [id])
        return rows;
    }

    create = async( nombres, apellidos, correo) => { 
        const [rows] = await pool.query('INSERT INTO participante(nombres, apellidos, correo) VALUES (?,?,?);', [nombres, apellidos, correo])
        return {
            id: rows.insertId,
            affected_rows: rows.affectedRows
        };    
    }

    filterByParticipante = async(id) => {
        const [rows] = await pool.query('SELECT e.titulo, e.descripcion, e.fecha_inic, e.fecha_fin FROM evento e INNER JOIN participante_evento ep ON e.evento_id = ep.evento_id WHERE ep.participante_id = ? ;', [id])
        return rows;    
    }
}

export default ParticipanteModelo;