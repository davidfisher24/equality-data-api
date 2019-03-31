const models = require('./../models');
const express = require('express');

class Router {
	constructor(model) {
		this.router = express.Router();
		this.models = models;
		this.model = this.models[model]
		this.addQueryRoutes();
    }

    addQueryRoutes(){
    	this.router.route('/').get(async (req, res) => {
			try {
				let dataAll = await this.model.findAll(this.findAllQuery(req.query)) 
				res.status(200).json(dataAll)
			} catch (e) {
				res.status(400).json(e);
			}
			
		});

		this.router.route('/:id').get(async (req, res) => {
			try {
				let dataOne = await this.model.findByPk(req.params.id,this.findOneQuery(req.query)) 
				res.status(200).json(dataOne)
			} catch (e) {
				res.status(400).json(e);
			}
	
		});
    }

    findAllQuery(query){
    	return {
			where: query,
		}
    }

    findOneQuery(query){
    	return {
			include: { 
				all: true,
			}
		}
    }

    build(){
    	return this.router;
    }

}


module.exports = Router;
