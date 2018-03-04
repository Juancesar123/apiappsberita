const assert = require('assert');
const app = require('../../src/app');

describe('\'hukumdanperaturan\' service', () => {
  it('registered the service', () => {
    const service = app.service('hukumdanperaturan');

    assert.ok(service, 'Registered the service');
  });
});
