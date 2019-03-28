const Router = require('./Router')
const _ = require('lodash')

class DataRouter extends Router {
	constructor() {
		super('Data')
    }

    findAllQuery(query){
    	return {
			where: _.pick(query, 'id', 'year', 'CountryId', 'wblIndex'),
			attributes: this.getAttributes(query)
		}
    }

    getAttributes(query){
    	const attr = _.pick(query, 'categories', 'criteria');
    	var attrs = [];
    	for (var key in attr) {
    		attr[key].split(',').forEach(a => {
    			attrs.push(key === 'categories' ? 'cat' + a : 'cr' + a)
    		})
    	}
    	return attrs.concat('id','year','wblIndex','CountryId');
    }
}

module.exports = DataRouter;