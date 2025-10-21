'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Farm extends Model {
    static associate(models) {
      // 1 Lahan milik 1 User (Petani)
      Farm.belongsTo(models.User, { foreignKey: 'userId' });
      // 1 Lahan bisa menghasilkan banyak Panen
      Farm.hasMany(models.Harvest, { foreignKey: 'farmId' });
    }
  }
  Farm.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_address: DataTypes.TEXT,
    area_size: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Farm',
  });
  return Farm;
};