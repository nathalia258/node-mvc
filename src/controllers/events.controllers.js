import {conexion} from './database/conexion.js';

const newEvent = async(req, res) =>{
    try {
        const{tema, titulo, fecha} = req.body
        const [rows] = await pool.query('INSERT INTO eventos (tema, titulo, descripcion, fecha_inic, fecha_fin) VALUES (?,?,?,?,?)', [tema, titulo, descripcion, fecha_inic, fecha_fin])
        console.log(req.body)
        res.send({
            id : rows.insertId,
            tema,
            titulo, 
            descripcion,
            fecha_inic,
            fecha_fin,
        })        
    } catch (error) {
        return res.status(500).json({
            message: 'error bb'
        })
    }
}

const allEvent = async(req, res) =>{
    try {
        const rows = await pool.query('SELECT * FROM eventos')
        res.json(rows)      
    } catch (error) {
        return res.status(500).json({
            message: 'error bb'
        })
    }
}

const deleteEvent = async(req, res) =>{
    try {
        const [result] = await pool.query('DELETE FROM eventos WHERE id = ?', [req.params.id])
        res.json(
            "borrados bb" 
        )      
    } catch (error) {
        return res.status(500).json({
            message: 'error bb'
        })
    }
}

const dateEvent = async(req, res) =>{
    try {
        const rows = await pool.query('SELECT * FROM eventos WHERE fecha = ?' , [req.params.date])
        res.json(rows)      
    } catch (error) {
        return res.status(500).json({
            message: 'error bb'
        })
    }
}
