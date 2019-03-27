'use strict';
module.exports = (sequelize, DataTypes) => {
  const Criteria = sequelize.define('Criteria', {
    question: DataTypes.STRING
  }, {
  	timestamps: false,
  });
  Criteria.associate = function(models) {
    Criteria.belongsTo(models.Category)
  };
  return Criteria;
};