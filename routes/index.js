const routes = require('express').Router();

const apiRoutes = require('./apiRoutes.js');
const htmlRoutes = require('./htmlRoutes.js');

routes.use('/api', apiRoutes);
routes.use('/', htmlRoutes);

module.exports = routes;