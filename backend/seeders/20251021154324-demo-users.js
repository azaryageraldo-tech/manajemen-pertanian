'use strict';
import bcrypt from 'bcrypt';
export default {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    await queryInterface.bulkInsert('Users', [
      // ID 1
      {
        name: 'Admin Utama',
        email: 'admin@pertanian.com',
        password: hashedPassword,
        role: 'admin',
        phone_number: '081234567890',
        address: 'Kantor Pusat',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ID 2
      {
        name: 'Petani Budi',
        email: 'petani.budi@gmail.com',
        password: hashedPassword,
        role: 'petani',
        phone_number: '081211112222',
        address: 'Desa Sukamaju',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ID 3
      {
        name: 'Petani Siti',
        email: 'petani.siti@gmail.com',
        password: hashedPassword,
        role: 'petani',
        phone_number: '081233334444',
        address: 'Desa Makmur',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ID 4
      {
        name: 'Pengepul Jaya',
        email: 'pengepul.jaya@gmail.com',
        password: hashedPassword,
        role: 'pengepul',
        phone_number: '081255556666',
        address: 'Pasar Induk',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true });
}
};