'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Users', [
        {
          username: 'johnDoe',
          password: await bcrypt.hash('123456', 10),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'janeDoe',
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    } catch (error) {
      console.error('Seeding error:', error);
      throw error; // Rethrow error after logging
    }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
