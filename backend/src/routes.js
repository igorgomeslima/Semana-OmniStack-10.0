//Query Params: request.query  -(Filtros, Ordenacao, Paginacao, ...) [console.log(request.query)];
//Route Params: request.params -(Identificar um recurso na alteracao ou remocao) EX: '/users/:id' [console.log(request.params)];
//Body: request.body -(Dados para criacao ou alteracao de um recurso) [console.log(request.body)];

const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index); 
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index)

module.exports = routes;