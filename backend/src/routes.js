const express = require('express');

const OngController = require('./controlllers/ongController');
const IncidentController = require('./controlllers/IncidentController');
const ProfileController = require('./controlllers/ProfileController');
const SessionController = require('./controlllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;