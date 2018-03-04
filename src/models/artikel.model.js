// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const artikel = sequelizeClient.define('artikel', {
    id_artikel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    id_mst_artikel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status_kirim: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_kirim: {
      type: DataTypes.STRING,
      allowNull: false
    },
    judul:{
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_input:{
      type: DataTypes.STRING,
      allowNull: false
    },
    isi:{
      type: DataTypes.STRING,
      allowNull: false
    },
    artikel_file:{
      type: DataTypes.STRING,
      allowNull: false
    },
    alamat:{
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    timestamps: false,
  });

  artikel.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return artikel;
};
