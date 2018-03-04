// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const notifikasi = sequelizeClient.define('notifikasi', {
    id_notifikasi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    status_pc: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    status_pc: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    status_kasiepengujian: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    status_korlab: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    status_lhu: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    status_kirim: {
      type: DataTypes.STRING(80),
      allowNull: true,
     },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    no_spk: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    nama_pelanggan: {
      type: DataTypes.STRING(60),
      allowNull: true,
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    timestamps: false,
  });

  notifikasi.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return notifikasi;
};
