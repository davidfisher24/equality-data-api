const Router = require('./Router')

class DataRouter extends Router {
	constructor() {
		super('Data',{extend: true})
		this.overwriteRoutes();
		this.addRoutes();
		return this.router;
    }

    overwriteRoutes() {
    }

    addRoutes() {
    }
}

module.exports = DataRouter;