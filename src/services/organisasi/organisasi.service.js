// Initializes the `organisasi` service on path `/organisasi`
const createService = require('feathers-sequelize');
const createModel = require('../../models/organisasi.model');
const hooks = require('./organisasi.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'organisasi',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/organisasi', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('organisasi');

  service.hooks(hooks);
};
