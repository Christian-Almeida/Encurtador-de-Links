const { Router } = require('express');
const controller = require('../src/controllers/controller')

const routes = Router();
routes.post('/create', controller.register);
module.exports = routes;