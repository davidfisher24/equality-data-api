'use strict';

const XLSX = require('xlsx')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const workbook = XLSX.readFile('./WBL2019Paneldata18726Feb2019.xlsx');
    const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets['WBL_panel_long']);

    let countries = []
    let regions = []
    let incomes = []
    let currentIncomeId = 0;
    let currentRegionId = 0;

    worksheet.forEach(row => {
      if (!regions.find(c => c.name === row['Region'])) {
        currentRegionId++;
        regions.push({
          id: currentRegionId, 
          name: row['Region'].trim(),
        })
      }

      if (!incomes.find(c => c.name === row['Income group'])) {
        currentIncomeId++;
        incomes.push({
          id: currentIncomeId, 
          name: row['Income group'].trim(),
        })
      }

      if (!countries.find(c => c.name === row['economy'])) {
        countries.push({
          name: row['economy'],
          wbcodev2: row['wbcodev2'],
          RegionId: regions.find(r => r.name === row['Region']).id,
          IncomeGroupId: incomes.find(i => i.name === row['Income group']).id,
        })
      }
    })

    await queryInterface.bulkInsert('Regions', regions, {});
    await queryInterface.bulkInsert('IncomeGroups', incomes, {});
    await queryInterface.bulkInsert('Countries', countries, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {})
    await queryInterface.bulkDelete('Regions', null, {});
    await queryInterface.bulkDelete('IncomeGroups', null, {});
  }
};
