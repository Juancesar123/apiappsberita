const assert = require('assert');
const app = require('../../src/app');

describe('\'artikel\' service', () => {
  it('registered the service', () => {
    const service = app.service('artikel');

    assert.ok(service, 'Registered the service');
  });
});
