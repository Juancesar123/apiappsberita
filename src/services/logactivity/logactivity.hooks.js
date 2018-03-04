const { authenticate } = require('@feathersjs/authentication').hooks;

const relationlogactivity = require('../../hooks/relationlogactivity');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationlogactivity()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
