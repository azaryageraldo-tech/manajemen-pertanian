'use strict';
export default {
  async up (queryInterface, Sequelize) {
    // Pengepul Jaya membeli 100kg Padi dari Petani Budi
    const quantity = 100;
    const price_per_unit = 9500.00; // Harus sama dengan harga di harvest
    const total_price = quantity * price_per_unit;

    await queryInterface.bulkInsert('Transactions', [
      {
        harvestId: 1, // Harvest Padi Budi
        buyerId: 4, // Pengepul Jaya
        sellerId: 2, // Petani Budi
        quantity_bought: quantity,
        total_price: total_price,
        status: 'completed', // Anggap sudah selesai
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};