// Example adjustment in 20240223014617-demo-posts.js
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Example post referencing a userId that exists
    return queryInterface.bulkInsert('Posts', [{
      title: 'First Post',
      content: 'This is the content of the first post.',
      userId: 1, // Make sure this ID matches an existing user
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Second Post',
      content: 'This is the content of the second post.',
      userId: 1, // Adjust as necessary to match an existing user
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};


