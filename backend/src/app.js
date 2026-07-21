import express from 'express';
import authRoute from './routers/auth.js';
import invitationsRoute from './routers/invitations.js';
import rsvpRoute from './routers/rsvp.js';
import templatesRoute from './routers/templates.js';

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/invitations', invitationsRoute);
app.use('/api/v1/rsvp', rsvpRoute);
app.use('/api/v1/templates', templatesRoute);

export default app;
