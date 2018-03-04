// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function notifikasi (hook) {
    hook.params.query.channelId = hook.id;
    hook.app.service('notifikasi').find({query: hook.params.query})
    .then(response => {
      // Set hook.result so the normal `get` operation doesn't happen.
      hook.result = response;
      resolve(hook);
    });
  };
};
