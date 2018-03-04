// Initializes the `fasilitaslab` service on path `/fasilitaslab`
const createService = require('feathers-sequelize');
const createModel = require('../../models/fasilitaslab.model');
const hooks = require('./fasilitaslab.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'fasilitaslab',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/fasilitaslab', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('fasilitaslab');

  service.hooks(hooks);
};
