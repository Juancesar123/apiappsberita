const assert = require('assert');
const app = require('../../src/app');

describe('\'notifikasiorder\' service', () => {
  it('registered the service', () => {
    const service = app.service('notifikasiorder');

    assert.ok(service, 'Registered the service');
  });
});
