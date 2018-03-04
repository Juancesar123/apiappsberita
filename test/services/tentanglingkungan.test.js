const assert = require('assert');
const app = require('../../src/app');

describe('\'tentanglingkungan\' service', () => {
  it('registered the service', () => {
    const service = app.service('tentanglingkungan');

    assert.ok(service, 'Registered the service');
  });
});
