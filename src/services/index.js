const artikel = require('./artikel/artikel.service.js');
const users = require('./users/users.service.js');
const setactivity = require('./setactivity/setactivity.service.js');
const logactivity = require('./logactivity/logactivity.service.js');
const hukumdanperaturan = require('./hukumdanperaturan/hukumdanperaturan.service.js');
const tentanglingkungan = require('./tentanglingkungan/tentanglingkungan.service.js');
const fasilitaslab = require('./fasilitaslab/fasilitaslab.service.js');
const organisasi = require('./organisasi/organisasi.service.js');
const laboratorium = require('./laboratorium/laboratorium.service.js');
const notifikasiorder = require('./notifikasiorder/notifikasiorder.service.js');
const notifikasi = require('./notifikasi/notifikasi.service.js');
const test = require('./test/test.service.js');
const tabletarifcheck = require('./tabletarifcheck/tabletarifcheck.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(artikel);
  app.configure(users);
  app.configure(setactivity);
  app.configure(logactivity);
  app.configure(hukumdanperaturan);
  app.configure(tentanglingkungan);
  app.configure(fasilitaslab);
  app.configure(organisasi);
  app.configure(laboratorium);
  app.configure(notifikasiorder);
  app.configure(notifikasi);
  app.configure(test);
  app.configure(tabletarifcheck);
};
