'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commodity extends Model {
    static associate(models) {
      // 1 Komoditas milik 1 Kategori
      Commodity.belongsTo(models.Category, { foreignKey: 'categoryId' });
      // 1 Komoditas ada di banyak Hasil Panen
      Commodity.hasMany(models.Harvest, { foreignKey: 'commodityId' });
      // 1 Komoditas punya banyak riwayat Harga Pasar
      Commodity.hasMany(models.MarketPrice, { foreignKey: 'commodityId' });
    }
  }
  Commodity.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.TEXT,
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Commodity',
  });
  return Commodity;
};