const routes = require('express').Router();

const apiRoutes = require('./apiRoutes.js');
const htmlRoutes = require('./htmlRoutes.js');

routes.use('/api', apiRoutes);
routes.use('/', htmlRoutes);

// routes.get('/', (req, res) => {
//   res.status(200).json({ message: 'Connected!' });
// });

module.exports = routes;