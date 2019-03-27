'use strict';
module.exports = (sequelize, DataTypes) => {
  const IncomeGroup = sequelize.define('IncomeGroup', {
    name: DataTypes.STRING
  }, {
  	timestamps: false,
  });
  IncomeGroup.associate = function(models) {
    IncomeGroup.hasMany(models.Country);
  };
  return IncomeGroup;
};