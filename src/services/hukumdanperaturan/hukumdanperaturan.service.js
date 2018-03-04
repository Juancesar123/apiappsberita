// Initializes the `hukumdanperaturan` service on path `/hukumdanperaturan`
const createService = require('feathers-sequelize');
const createModel = require('../../models/hukumdanperaturan.model');
const hooks = require('./hukumdanperaturan.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'hukumdanperaturan',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/hukumdanperaturan', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('hukumdanperaturan');

  service.hooks(hooks);
};
