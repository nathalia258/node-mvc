import {Router} from 'express'
import EventoController from '../controllers/events.controllers.js'

const router = Router();
const eventoController = new EventoController;

router.get('/eventos/date', eventoController.filterDate)
router.get('/eventos/:id', eventoController.show) 
router.get('/eventos', eventoController.index) 
router.post('/eventos/', eventoController.create)
router.get('/filtrarParticipantes/:id', eventoController.filterByEvento) 




export default router