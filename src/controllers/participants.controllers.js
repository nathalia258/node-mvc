// import {pool} from '../../database/conexion.js';
import ParticipanteModelo from '../models/participants.models.js';
import  Request  from 'express';
import  Response  from 'express';

const participanteModelo = new ParticipanteModelo


class ParticipanteController{
    index = async(Request, Response) =>{
        try{
            const response = await participanteModelo.getAll();
            Response.send (response)
        }catch (error) {
            return Response.status(500).json({
                message: error
            })
        } 
    }
    show = async(Request, Response) => {
        try{  
            const response = await participanteModelo.getOne(Request.params.id);
            Response.send (response)
        }catch (error) {
            return Response.status(500).json({
                message: error
            })
        } 
    }
    create = async(Request, Response) => {
        try{  
            const {nombres, apellidos, correo} =  Request.body
            const response = await participanteModelo.create(nombres, apellidos, correo);
            Response.send(response)          
        }catch (error) {
            return Response.status(500).json({
                message: error
            })
        } 
    }

    filterByParticipante = async(Request, Response) => {
        try{  
            const id = Request.params.id
            console.log (id);
            const response = await participanteModelo.filterByParticipante(id);
            Response.send(response)          
        }catch (error) {
            return Response.status(500).json({
                message: error
            })
        } 
    }
} 
export default ParticipanteController;