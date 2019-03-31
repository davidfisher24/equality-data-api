'use strict';
module.exports = (sequelize, DataTypes) => {
  const ExperienceType = sequelize.define('ExperienceType', {
    name: DataTypes.STRING
  }, {
  	timestamps: false,
  });
  ExperienceType.associate = function(models) {
    ExperienceType.hasMany(models.Experience);
  };
  return ExperienceType;
};