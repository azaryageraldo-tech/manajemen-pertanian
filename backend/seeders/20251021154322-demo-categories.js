'use strict';
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Sayuran',
        description: 'Berbagai jenis sayuran segar.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Buah-buahan',
        description: 'Berbagai jenis buah-buahan lokal dan impor.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rempah-rempah',
        description: 'Rempah-rempah untuk bumbu masak.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Biji-bijian',
        description: 'Padi, jagung, kedelai, dll.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
  // Menghapus semua data dan RESET auto-increment ID
  await queryInterface.bulkDelete('Categories', null, { truncate: true, cascade: true, restartIdentity: true });
}
};