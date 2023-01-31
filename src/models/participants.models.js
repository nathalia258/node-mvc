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

    create = async(body) => { 
        const{nombres, apellidos, correo} = body
        const [rows] = await pool.query('INSERT INTO participante (nombres, apellidos, correo) VALUES (?,?,?)', [nombres, apellidos, correo])
        return rows;    
    }

}

export default ParticipanteModelo;