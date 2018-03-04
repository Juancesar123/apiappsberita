const assert = require('assert');
const app = require('../../src/app');

describe('\'organisasi\' service', () => {
  it('registered the service', () => {
    const service = app.service('organisasi');

    assert.ok(service, 'Registered the service');
  });
});
