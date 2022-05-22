const { Router } = require('express');
const controller = require('../src/controllers/controller')

const routes = Router();
routes.post('/create', controller.register);
routes.get('/all', controller.index);
routes.get('/:id', controller.view);
module.exports = routes;