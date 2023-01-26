import {Router} from 'express'
import {newEvent} from '../src/controllers/events.controller.js';

const router = Router();

router.post('/', newEvent);
router.get('/', allEvents);
router.delete('/', deleteEvents);


export default router