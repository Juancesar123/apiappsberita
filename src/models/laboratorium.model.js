// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const laboratorium = sequelizeClient.define('laboratorium', {
    id_laboratorium: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    kd_laboratorium: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    namalab: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    namalab_eng: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isi_eng: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_laboratorium: {
      type: DataTypes.STRING,
      allowNull: false
    },
    laboratorium_file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uploader: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_upload: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_input: {
      type: DataTypes.STRING,
      allowNull: false
    },
    validator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_validasi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_expire: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keyword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kd_unitkerja: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_update: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_sms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_translate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false
    }





  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    timestamps: false,
  });

  laboratorium.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return laboratorium;
};
