import {Router} from 'express'
import {newEvent} from '../controllers/events.controllers.js';

const router = Router();

router.post('/', newEvent);
// router.get('/', allEvents);
// router.delete('/', deleteEvents);


export default router