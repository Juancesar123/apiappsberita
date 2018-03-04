// Initializes the `tabletarifcheck` service on path `/tabletarifcheck`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tabletarifcheck.model');
const hooks = require('./tabletarifcheck.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tabletarifcheck',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/tabletarifcheck', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tabletarifcheck');

  service.hooks(hooks);
};
