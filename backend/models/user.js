'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // 1 User (Petani) punya banyak Lahan (Farm)
      User.hasMany(models.Farm, { foreignKey: 'userId', as: 'farms' });
      
      // 1 User (Petani) punya banyak Hasil Panen (Harvest)
      User.hasMany(models.Harvest, { foreignKey: 'userId', as: 'harvests' });

      // 1 User (Pengepul) punya banyak Pembelian (Transaction)
      User.hasMany(models.Transaction, { foreignKey: 'buyerId', as: 'purchases' });
      
      // 1 User (Petani) punya banyak Penjualan (Transaction)
      User.hasMany(models.Transaction, { foreignKey: 'sellerId', as: 'sales' });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'petani', 'pengepul'),
      allowNull: false
    },
    phone_number: DataTypes.STRING,
    address: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};