const DataRouter = require('./DataRouter');
const ExperienceRouter = require('./ExperienceRouter');
const AssetRouter = require('./AssetRouter');
const Router = require('./Router');

var criteriaRouter = new Router('Criteria').build();
var categoryRouter = new Router('Category').build();
var countryRouter = new Router('Country').build();
var incomeGroupRouter = new Router('IncomeGroup').build();
var regionRouter = new Router('Region').build();

var dataRouter = new DataRouter().build();
var experienceRouter = new ExperienceRouter().build();
var assetRouter = new AssetRouter().build();

module.exports = {
	criteriaRouter, categoryRouter, incomeGroupRouter, regionRouter, 
	countryRouter, dataRouter, experienceRouter, assetRouter,
}

