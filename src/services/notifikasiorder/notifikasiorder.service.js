// Initializes the `notifikasiorder` service on path `/notifikasiorder`
const createService = require('feathers-sequelize');
const createModel = require('../../models/notifikasiorder.model');
const hooks = require('./notifikasiorder.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'notifikasiorder',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/notifikasiorder', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('notifikasiorder');

  service.hooks(hooks);
};
