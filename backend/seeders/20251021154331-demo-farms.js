'use strict';
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Farms', [
      // ID 1
      {
        userId: 2, // Petani Budi
        name: 'Sawah Budi',
        location_address: 'Blok A, Desa Sukamaju',
        area_size: 2.5, // 2.5 Hektar
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ID 2
      {
        userId: 3, // Petani Siti
        name: 'Kebun Siti',
        location_address: 'Blok B, Desa Makmur',
        area_size: 1.0, // 1 Hektar
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Farms', null, {});
  }
};