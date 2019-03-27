'use strict';
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    name: DataTypes.STRING
  }, {
  	timestamps: false,
  });
  Region.associate = function(models) {
    Region.hasMany(models.Country);
  };
  return Region;
};