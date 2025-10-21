'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarketPrice extends Model {
    static associate(models) {
      // 1 Harga Pasar milik 1 Komoditas
      MarketPrice.belongsTo(models.Commodity, { foreignKey: 'commodityId' });
      // 1 Harga Pasar di-set oleh 1 Admin
      MarketPrice.belongsTo(models.User, { as: 'Admin', foreignKey: 'adminId' });
    }
  }
  MarketPrice.init({
    commodityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MarketPrice',
  });
  return MarketPrice;
};