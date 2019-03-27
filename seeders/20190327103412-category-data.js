'use strict';

const XLSX = require('xlsx')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    function isUpperCase(str) {
        return str === str.toUpperCase();
    }

    let categories = [];
    let criteria = [];
    let currentRow = 1;
    let currentCategoryId = 0;
    let currentRowId = 0;

    const workbook = XLSX.readFile('./WBL2019Paneldata18726Feb2019.xlsx');
    const worksheet = workbook.Sheets['Data notes'];

    while (currentRow <= 43) {
      var cell = 'A'+currentRow;
      var text = worksheet[cell].v;

      if (isUpperCase(text)) {
        currentCategoryId++;
        categories.push({
          id:currentCategoryId, 
          question: text, 
        });
      } else {
        currentRowId++;
        criteria.push({
          id: currentRowId, 
          question: text, 
          CategoryId: currentCategoryId,
        })
      }

      currentRow++;
    }

    await queryInterface.bulkInsert('Categories', categories, {});
    await queryInterface.bulkInsert('Criteria', criteria, {})
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Criteria', null, {});
    await queryInterface.bulkDelete('Categories', null, {}); 
  }
};
