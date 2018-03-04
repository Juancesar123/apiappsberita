// Initializes the `notifikasi` service on path `/notifikasi`
const createService = require('feathers-sequelize');
const createModel = require('../../models/notifikasi.model');
const hooks = require('./notifikasi.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'notifikasi',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/notifikasi', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('notifikasi');

  service.hooks(hooks);
};
