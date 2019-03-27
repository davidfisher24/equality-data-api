const models = require('./../models');
const express = require('express');

class Router {
	constructor(model,extend = false) {
		this.router = express.Router();
		this.models = models;

		this.router.route('/').get(async (req, res) => {
			try {
				let dataAll = await this.models[model].findAll({
					where: req.query,
				}) 
				res.status(200).json(dataAll)
			} catch (e) {
				res.status(400).json(e);
			}
			
		});

		this.router.route('/:id').get(async (req, res) => {
			try {
				let dataOne = await this.models[model].findByPk(req.params.id,{
					include: { 
						all: true,
					}
				}) 
				res.status(200).json(dataOne)
			} catch (e) {
				res.status(400).json(e);
			}
	
		});

		if (!extend) return this.router;
    }
}


module.exports = Router;
