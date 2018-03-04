// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const setactivity = sequelizeClient.define('setactivity', {
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
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

  setactivity.associate = function (models) { // eslint-disable-line no-unused-vars
    const Player = models.logactivity;
    const Team  = models.setactivity;
    Team.hasMany(Player); 
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return setactivity;
};
