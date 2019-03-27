'use strict';

const XLSX = require('xlsx')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    function isUpperCase(str) {
        return str === str.toUpperCase();
    }

    function getBoolean(str) {
      return str.trim() === 'Yes' ? true : false;
    }

    const workbook = XLSX.readFile('./WBL2019Paneldata18726Feb2019.xlsx');
    const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets['WBL_panel_long']);

    let countries = await queryInterface.sequelize.query(
      `SELECT id, name from "Countries";`
    );
    countries = countries[0]
 
    let data = worksheet.map((row,i) => {
      var currentCategory = 0;
      var currentCriteria = 0;
      let entry = {
        CountryId:countries.find(c => c.name === row['economy']).id,
        wblIndex: row['WBL INDEX'],
        year: row['reportyr'],
      };
      delete row['wbcodev2'];
      delete row['Region'];
      delete row['Income group'];
      delete row['economy'];    
      delete row['WBL INDEX'];
      delete row['reportyr'];

      for (var key in row) {
        if (isUpperCase(key)) {
          currentCategory++;
          entry['cat'+currentCategory] = row[key];
        } else {
          currentCriteria++;
          entry['cr'+currentCriteria] = getBoolean(row[key]);
        }
      }

      return entry;
    })

    /*await Promise.all(data.map(async (d,i) => {
      try {
        await queryInterface.bulkInsert('Data', [d], {});
      } catch (e) {
        console.log(e)
      }
      
    }))*/

    await queryInterface.bulkInsert('Data', data, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Data', null, {truncate: true});
  }
};
