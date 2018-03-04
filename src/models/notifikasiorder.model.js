// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const notifikasiorder = sequelizeClient.define('notifikasiorder', {
    id_notiforder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    no_order: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_customer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_order: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status_kirim: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  notifikasiorder.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return notifikasiorder;
};
