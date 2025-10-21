'use strict';
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Commodities', [
      // ID 1
      {
        name: 'Bawang Merah',
        description: 'Bawang merah lokal Brebes.',
        categoryId: 1, // Sayuran
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ID 2
      {
        name: 'Padi (Gabah Kering)',
        description: 'Padi jenis IR64.',
        categoryId: 4, // Biji-bijian
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ID 3
      {
        name: 'Mangga Harum Manis',
        description: 'Mangga matang pohon.',
        categoryId: 2, // Buah-buahan
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ID 4
      {
        name: 'Jahe Merah',
        description: 'Jahe merah untuk obat dan bumbu.',
        categoryId: 3, // Rempah-rempah
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Commodities', null, { truncate: true, cascade: true, restartIdentity: true });
}
};