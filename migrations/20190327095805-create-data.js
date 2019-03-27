'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CountryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Countries',
          key: 'id'
        },
      },
      year: {
        type: Sequelize.INTEGER
      },
      wblIndex: {
        type: Sequelize.INTEGER
      },
      cat1: {
        type: Sequelize.INTEGER
      },
      cat2: {
        type: Sequelize.INTEGER
      },
      cat3: {
        type: Sequelize.INTEGER
      },
      cat4: {
        type: Sequelize.INTEGER
      },
      cat5: {
        type: Sequelize.INTEGER
      },
      cat6: {
        type: Sequelize.INTEGER
      },
      cat7: {
        type: Sequelize.INTEGER
      },
      cat8: {
        type: Sequelize.INTEGER
      },
      cr1: {
        type: Sequelize.BOOLEAN
      },
      cr2: {
        type: Sequelize.BOOLEAN
      },
      cr3: {
        type: Sequelize.BOOLEAN
      },
      cr4: {
        type: Sequelize.BOOLEAN
      },
      cr5: {
        type: Sequelize.BOOLEAN
      },
      cr6: {
        type: Sequelize.BOOLEAN
      },
      cr7: {
        type: Sequelize.BOOLEAN
      },
      cr8: {
        type: Sequelize.BOOLEAN
      },
      cr9: {
        type: Sequelize.BOOLEAN
      },
      cr10: {
        type: Sequelize.BOOLEAN
      },
      cr11: {
        type: Sequelize.BOOLEAN
      },
      cr12: {
        type: Sequelize.BOOLEAN
      },
      cr13: {
        type: Sequelize.BOOLEAN
      },
      cr14: {
        type: Sequelize.BOOLEAN
      },
      cr15: {
        type: Sequelize.BOOLEAN
      },
      cr16: {
        type: Sequelize.BOOLEAN
      },
      cr17: {
        type: Sequelize.BOOLEAN
      },
      cr18: {
        type: Sequelize.BOOLEAN
      },
      cr19: {
        type: Sequelize.BOOLEAN
      },
      cr20: {
        type: Sequelize.BOOLEAN
      },
      cr21: {
        type: Sequelize.BOOLEAN
      },
      cr22: {
        type: Sequelize.BOOLEAN
      },
      cr23: {
        type: Sequelize.BOOLEAN
      },
      cr24: {
        type: Sequelize.BOOLEAN
      },
      cr25: {
        type: Sequelize.BOOLEAN
      },
      cr26: {
        type: Sequelize.BOOLEAN
      },
      cr27: {
        type: Sequelize.BOOLEAN
      },
      cr28: {
        type: Sequelize.BOOLEAN
      },
      cr29: {
        type: Sequelize.BOOLEAN
      },
      cr30: {
        type: Sequelize.BOOLEAN
      },
      cr31: {
        type: Sequelize.BOOLEAN
      },
      cr32: {
        type: Sequelize.BOOLEAN
      },
      cr33: {
        type: Sequelize.BOOLEAN
      },
      cr34: {
        type: Sequelize.BOOLEAN
      },
      cr35: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Data');
  }
};