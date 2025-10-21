'use strict';
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Harvests', [
      // ID 1
      {
        userId: 2, // Petani Budi
        farmId: 1, // Sawah Budi
        commodityId: 2, // Padi
        quantity: 500, // 500 Kg
        quality: 'Grade A',
        price_per_unit: 9500.00,
        status: 'tersedia',
        harvest_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ID 2
      {
        userId: 3, // Petani Siti
        farmId: 2, // Kebun Siti
        commodityId: 3, // Mangga Harum Manis
        quantity: 150, // 150 Kg
        quality: 'Premium',
        price_per_unit: 28000.00,
        status: 'tersedia',
        harvest_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ID 3
      {
        userId: 3, // Petani Siti
        farmId: 2, // Kebun Siti
        commodityId: 4, // Jahe Merah
        quantity: 50, // 50 Kg
        quality: 'Standar',
        price_per_unit: 40000.00,
        status: 'tersedia',
        harvest_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Harvests', null, {});
  }
};