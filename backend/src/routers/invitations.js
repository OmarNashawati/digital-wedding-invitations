import express from 'express';

import {
  createInvitation,
  deleteInvitation,
  getInvitation,
  getInvitationPage,
  updateInvitation,
  publishInvitation,
  getPublicInvitation,
} from '../controllers/invitations.js';

const router = express.Router();

router.route('/').post(createInvitation);
router.route('/:id').get(getInvitation).put(updateInvitation).delete(deleteInvitation);
router.route('/slug/:slug').get(getPublicInvitation);
router.route('/:id/publish').post(publishInvitation);

export default router;
