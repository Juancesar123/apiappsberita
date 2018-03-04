const assert = require('assert');
const app = require('../../src/app');

describe('\'logactivity\' service', () => {
  it('registered the service', () => {
    const service = app.service('logactivity');

    assert.ok(service, 'Registered the service');
  });
});
