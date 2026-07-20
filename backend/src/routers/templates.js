import express from 'express';

import { getTemplate, getTemplates } from '../controllers/templates.js';

const router = express.Router();

router.route('/').get(getTemplates);
router.route('/:id').get(getTemplate);
export default router;
