// Initializes the `logactivity` service on path `/logactivity`
const createService = require('feathers-sequelize');
const createModel = require('../../models/logactivity.model');
const hooks = require('./logactivity.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'logactivity',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/logactivity', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('logactivity');

  service.hooks(hooks);
};
