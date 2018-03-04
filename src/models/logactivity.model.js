// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const logactivity = sequelizeClient.define('logactivity', {
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

  logactivity.associate = function (models) {
    const Player = models.setactivity;
    const Team  = models.logactivity;
    Team.belongsTo(Player,{foreignKey: 'setactivityId',sourceKey: 'setactivityId',targetKey:'id'});
    // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return logactivity;
};
