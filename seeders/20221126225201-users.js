'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [{
      name: 'John',
      username: 'JDoe',
      email:"jdoe@example.com",
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {})
  }
};
