// Initializes the `laboratorium` service on path `/laboratorium`
const createService = require('feathers-sequelize');
const createModel = require('../../models/laboratorium.model');
const hooks = require('./laboratorium.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'laboratorium',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/laboratorium', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('laboratorium');

  service.hooks(hooks);
};
