const express =  require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//ONG ROUTER
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//List incidents by specif ongs
routes.get('/profile', ProfileController.index);

//INCIDENT ROUTER
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

