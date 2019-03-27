const DataRouter = require('./DataRouter');
const Router = require('./Router');

var criteriaRouter = new Router('Criteria');
var categoryRouter = new Router('Category');
var countryRouter = new Router('Country');
var incomeGroupRouter = new Router('IncomeGroup');
var regionRouter = new Router('Region');
var dataRouter = new DataRouter();

module.exports = {
	criteriaRouter, categoryRouter, incomeGroupRouter, regionRouter, countryRouter, dataRouter
}

