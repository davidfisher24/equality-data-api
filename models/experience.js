'use strict';
const _ = require('lodash')

module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    text: DataTypes.TEXT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    validated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    timestamps: true,
  });
  Experience.associate = function(models) {
    Experience.belongsTo(models.Country);
    Experience.belongsTo(models.ExperienceType);
    Experience.belongsTo(models.Criteria);
  };

  Experience._findAll = Experience.findAll;

  Experience.prototype.convertFormatToGeoJson = function() {
    this.dataValues = {
      "type" : "Feature",
      "properties" : this.dataValues,
      "geometry" : {
        "type": "Point",
        "coordinates" : [this.dataValues.longitude,this.dataValues.latitude],
      }
    }
    return this;
  }

  Experience.findAll = async function(options) {
    let data = await this._findAll.apply(this,[options]);
    return _.isArray(data) ? 
            {
              "type" : "FeatureCollection",
              "features" : data.map(d => d.convertFormatToGeoJson())
            } :
            data.convertFormatToGeoJson();
  }

  return Experience;
};