'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Harvest extends Model {
    static associate(models) {
      // 1 Panen milik 1 User (Petani)
      Harvest.belongsTo(models.User, { foreignKey: 'userId' });
      // 1 Panen dari 1 Lahan
      Harvest.belongsTo(models.Farm, { foreignKey: 'farmId' });
      // 1 Panen adalah 1 Komoditas
      Harvest.belongsTo(models.Commodity, { foreignKey: 'commodityId' });
      
      // 1 Panen bisa ada di banyak Transaksi
      Harvest.hasMany(models.Transaction, { foreignKey: 'harvestId' });
    }
  }
  Harvest.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    farmId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    commodityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    quality: DataTypes.STRING,
    price_per_unit: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('tersedia', 'habis', 'pending'),
      defaultValue: 'tersedia'
    },
    harvest_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Harvest',
  });
  return Harvest;
};