'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    question: DataTypes.STRING
  }, {
  	timestamps: false,
  });
  Category.associate = function(models) {
    Category.hasMany(models.Criteria);
  };
  return Category;
};