// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tabletarifcheck = sequelizeClient.define('tabletarifcheck', {
    Parameter: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey:true
    },
    Kd_contoh: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
    },
    Uraian_parameter: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Tarif_mahasiswa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Satuan: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    SNI: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    Uraian_contoh: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    Tarif_industri: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    timestamps:false
  });

  tabletarifcheck.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return tabletarifcheck;
};
