'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Experiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      validated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      reported: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      text: {
        type: Sequelize.TEXT
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      CountryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Countries',
          key: 'id'
        },
      },
      ExperienceTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ExperienceTypes',
          key: 'id'
        },
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
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
    return
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Experiences');
  }
};