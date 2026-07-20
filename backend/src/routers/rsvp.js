import express from 'express';

import { getRSVP, submitRSVP } from '../controllers/rsvp.js';

const router = express.Router();

router.route('/').post(submitRSVP);
router.route('/:invitationID').get(getRSVP);

export default router;
