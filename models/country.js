'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    wbcodev2: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Country.associate = function(models) {
    Country.belongsTo(models.Region);
  	Country.belongsTo(models.IncomeGroup);
  	Country.hasMany(models.Data);
  };
  return Country;
};