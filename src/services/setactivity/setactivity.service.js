// Initializes the `/setactivity` service on path `/setactivity`
const createService = require('feathers-sequelize');
const createModel = require('../../models/setactivity.model');
const hooks = require('./setactivity.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'setactivity',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/setactivity', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('setactivity');

  service.hooks(hooks);
};
