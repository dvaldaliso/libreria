'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Lectors', [
      {
      id: 1,
      nombre: 'David',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      nombre: 'Suny',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Lectors', null, {});
  }
};
