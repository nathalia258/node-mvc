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
            const response = await participanteModelo.create(Request.body);
            Response.status(201).json({
                msg: response,
            })
        }catch (error) {
            return Response.status(500).json({
                message: error
            })
        } 
    }

} 
export default ParticipanteController;