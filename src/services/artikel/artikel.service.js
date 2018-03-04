// Initializes the `artikel` service on path `/artikel`
const createService = require('feathers-sequelize');
const createModel = require('../../models/artikel.model');
const hooks = require('./artikel.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'artikel',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/artikel', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('artikel');

  service.hooks(hooks);
};
