'use strict';

const _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define('Data', {
    year: DataTypes.INTEGER,
    wblIndex: DataTypes.INTEGER,
    cat1: DataTypes.INTEGER,
    cat2: DataTypes.INTEGER,
    cat3: DataTypes.INTEGER,
    cat4: DataTypes.INTEGER,
    cat5: DataTypes.INTEGER,
    cat6: DataTypes.INTEGER,
    cat7: DataTypes.INTEGER,
    cat8: DataTypes.INTEGER,
    cr1: DataTypes.BOOLEAN,
    cr2: DataTypes.BOOLEAN,
    cr3: DataTypes.BOOLEAN,
    cr4: DataTypes.BOOLEAN,
    cr5: DataTypes.BOOLEAN,
    cr6: DataTypes.BOOLEAN,
    cr7: DataTypes.BOOLEAN,
    cr8: DataTypes.BOOLEAN,
    cr9: DataTypes.BOOLEAN,
    cr10: DataTypes.BOOLEAN,
    cr11: DataTypes.BOOLEAN,
    cr12: DataTypes.BOOLEAN,
    cr13: DataTypes.BOOLEAN,
    cr14: DataTypes.BOOLEAN,
    cr15: DataTypes.BOOLEAN,
    cr16: DataTypes.BOOLEAN,
    cr17: DataTypes.BOOLEAN,
    cr18: DataTypes.BOOLEAN,
    cr19: DataTypes.BOOLEAN,
    cr20: DataTypes.BOOLEAN,
    cr21: DataTypes.BOOLEAN,
    cr22: DataTypes.BOOLEAN,
    cr23: DataTypes.BOOLEAN,
    cr24: DataTypes.BOOLEAN,
    cr25: DataTypes.BOOLEAN,
    cr26: DataTypes.BOOLEAN,
    cr27: DataTypes.BOOLEAN,
    cr28: DataTypes.BOOLEAN,
    cr29: DataTypes.BOOLEAN,
    cr30: DataTypes.BOOLEAN,
    cr31: DataTypes.BOOLEAN,
    cr32: DataTypes.BOOLEAN,
    cr33: DataTypes.BOOLEAN,
    cr34: DataTypes.BOOLEAN,
    cr35: DataTypes.BOOLEAN
  }, {
    timestamps: false,
  });
  Data.associate = function(models) {
    Data.belongsTo(models.Country);
  };

  Data._findAll = Data.findAll;

  Data.prototype.convertFormatToJson = function() {
    let converted = {categories: [], criteria: []}
    for (var key in this.dataValues) {
        if (key.includes('cat') || key.includes('cr')) {
            converted[key.includes('cat') ? 'categories' : 'criteria'].push({
                id: parseInt(key.replace('cat','').replace('cr','')),
                value: this.dataValues[key]
            })
            delete this.dataValues[key]
        }
    }

    this.dataValues.categories = converted.categories;
    this.dataValues.criteria = converted.criteria
    return this
  }

  Data.findAll = async function(options) {
    let data = await this._findAll.apply(this,[options]);
    return _.isArray(data) ? data.map(d => d.convertFormatToJson()) : data.convertFormatToJson();
  }

  return Data;
};