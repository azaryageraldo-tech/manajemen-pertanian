'use strict';
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MarketPrices', [
      {
        commodityId: 1, // Bawang Merah
        price: 25000.00,
        adminId: 1, // Admin Utama
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        commodityId: 2, // Padi
        price: 10000.00,
        adminId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        commodityId: 3, // Mangga
        price: 30000.00,
        adminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MarketPrices', null, {});
  }
};