const assert = require('assert');
const app = require('../../src/app');

describe('\'fasilitaslab\' service', () => {
  it('registered the service', () => {
    const service = app.service('fasilitaslab');

    assert.ok(service, 'Registered the service');
  });
});
