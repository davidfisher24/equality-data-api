'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RegionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Regions',
          key: 'id'
        },
      },
      IncomeGroupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'IncomeGroups',
          key: 'id'
        },
      },
      name: {
        type: Sequelize.STRING
      },
      wbcodev2: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Countries');
  }
};