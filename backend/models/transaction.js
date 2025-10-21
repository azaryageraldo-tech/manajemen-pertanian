'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      // 1 Transaksi terkait 1 Panen
      Transaction.belongsTo(models.Harvest, { foreignKey: 'harvestId' });
      // 1 Transaksi milik 1 Pembeli (Pengepul)
      Transaction.belongsTo(models.User, { as: 'Buyer', foreignKey: 'buyerId' });
      // 1 Transaksi milik 1 Penjual (Petani)
      Transaction.belongsTo(models.User, { as: 'Seller', foreignKey: 'sellerId' });
    }
  }
  Transaction.init({
    harvestId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity_bought: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'shipped', 'completed', 'cancelled'),
      defaultValue: 'pending'
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};