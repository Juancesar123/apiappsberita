const assert = require('assert');
const app = require('../../src/app');

describe('\'notifikasi\' service', () => {
  it('registered the service', () => {
    const service = app.service('notifikasi');

    assert.ok(service, 'Registered the service');
  });
});
