const assert = require('assert');
const app = require('../../src/app');

describe('\'laboratorium\' service', () => {
  it('registered the service', () => {
    const service = app.service('laboratorium');

    assert.ok(service, 'Registered the service');
  });
});
