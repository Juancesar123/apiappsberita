const assert = require('assert');
const app = require('../../src/app');

describe('\'/setactivity\' service', () => {
  it('registered the service', () => {
    const service = app.service('setactivity');

    assert.ok(service, 'Registered the service');
  });
});
