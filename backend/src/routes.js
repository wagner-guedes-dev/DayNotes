const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationsController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

//Rota Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete )

//Rota Priority
routes.get('/priorities', PriorityController.read)
routes.post('/priorities/:id', PriorityController.update)

//rota content
routes.post('/contents/:id', ContentController.update)

module.exports = routes