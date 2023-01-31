import {Router} from 'express'
import ParticipantesController from '../controllers/participants.controllers.js'

const router = Router();
const participantsController = new ParticipantesController;

router.get('/participantes', participantsController.index) 
router.post('/participantes', participantsController.create)
router.get('/participantes/:id', participantsController.show) 

export default router