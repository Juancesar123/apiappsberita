// Initializes the `tentanglingkungan` service on path `/tentanglingkungan`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tentanglingkungan.model');
const hooks = require('./tentanglingkungan.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tentanglingkungan',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tentanglingkungan', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tentanglingkungan');

  service.hooks(hooks);
};
