const assert = require('assert');
const app = require('../../src/app');

describe('\'tabletarifcheck\' service', () => {
  it('registered the service', () => {
    const service = app.service('tabletarifcheck');

    assert.ok(service, 'Registered the service');
  });
});
