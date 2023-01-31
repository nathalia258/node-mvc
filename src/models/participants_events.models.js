import {pool} from '../../database/conexion.js';

class ParticipanteEventoModelo{

    getByEvent = async(id) =>{
        const [rows] = await pool.query('SELECT * FROM evento where evento_id = ?',  [id])
        return rows;
    }

    getByPartipante = async(id) =>{
        const [rows] = await pool.query('SELECT * FROM evento where participante_id = ?',  [id])
        return rows;
    }

    create = async(participante_id, evento_id) => { 
        const [rows] = await pool.query('INSERT INTO participante_evento (participante_id, evento_id) VALUES (?,?)', [participante_id, evento_id])
        return rows;    
    }

}

export default ParticipanteEventoModelo;