import {pool} from '../../database/conexion.js';

class EventoModelo{

    getAll= async() =>{
        const [rows] = await pool.query('SELECT * FROM evento')
        return rows;
    }
    getOne = async(id) =>{
        const [rows] = await pool.query('SELECT * FROM evento where evento_id = ?',  [id])
        return rows;
    }

    create = async(body) => { 
        const{tema, titulo, fecha_inic, fecha_fin, descripcion} = body
        const [rows] = await pool.query('INSERT INTO evento (tema, titulo, descripcion, fecha_inic, fecha_fin) VALUES (?,?,?,?,?)', [tema, titulo, descripcion, fecha_inic, fecha_fin])
        return rows;    
    }

    getByDate = async(fecha_inicio, fecha_fin) => {
        const rows = await pool.query('SELECT * FROM evento where fecha_inic >=  ? AND fecha_inic <= ? ',  [fecha_inicio, fecha_fin])
        return rows;    

    }
}

export default EventoModelo;