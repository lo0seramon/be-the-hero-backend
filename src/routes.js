const express =  require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");

const routes = express.Router();

//ONG ROUTER
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//INCIDENT ROUTER
routes.post('/incidents', IncidentController.create);

module.exports = routes;

