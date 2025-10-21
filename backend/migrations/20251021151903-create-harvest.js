'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Harvests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: { // Petani yang punya
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      farmId: { // Dari lahan mana
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Farms', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      commodityId: { // Komoditas apa
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Commodities', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantity: { // Misal dalam Kg
        type: Sequelize.FLOAT,
        allowNull: false
      },
      quality: { // Misal 'Premium', 'Standar', 'Grade B'
        type: Sequelize.STRING
      },
      price_per_unit: { // Harga per Kg
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('tersedia', 'habis', 'pending'),
        allowNull: false,
        defaultValue: 'tersedia'
      },
      harvest_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Harvests');
  }
};