// import {pool} from '../../database/conexion.js';
import EventoModelo from '../models/events.models.js';
import  Request  from 'express';
import  Response  from 'express';

const eventoModelo = new EventoModelo


class EventoController{
    index = async(Request, Response) =>{
        try{
            const response = await eventoModelo.getAll();
            Response.send (response)
        }catch (error) {
            return Response.status(500).json({
                message: error
            })
        } 
    }
    show = async(Request, Response) => {
        try{  
            const response = await eventoModelo.getOne(Request.params.id);
            Response.send (response)
        }catch (error) {
            return Response.status(500).json({
                message: error
            })
        } 
    }
    create = async(Request, Response) => {
        try{  
            const response = await eventoModelo.create(Request.body);
            Response.status(201).json({
                msg: response,
            })
        }catch (error) {
            return Response.status(500).json({
                message: error
            })
        } 
    }

    filterDate = async(Request, Response) => {
        try{  
            const {fecha_inicio , fecha_fin} = Request.body
            if (fecha_inicio > fecha_fin){
                return Response.status(400).json({
                    Error: "La fecha de inicio no puede ser despues de la fecha de fin, pido seriedad mi pana"
                })

            }
            const response = await eventoModelo.getByDate(fecha_inicio, fecha_fin);
            Response.status(201).json({
                msg: response[0],
            })
        }catch (error) {
            return Response.status(500).json({
                message: error
            })
        } 
    }

} 
export default EventoController;