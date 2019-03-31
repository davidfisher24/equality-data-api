const Router = require('./Router')
const _ = require('lodash')

class ExperienceRouter extends Router {
	constructor() {
        super('Experience');
        this.addPostRoute()
    }

    addPostRoute(){
        this.router.route('/').post(async (req, res) => {
            try {
                let newOne = await this.model.create({
                    location: req.body.location,
                    email: req.body.email,
                    name: req.body.name,
                    text: req.body.text,
                    latitude: req.body.latitude,
                    longitude: req.body.longitude,
                }) 
                await newOne.setCountry(req.body.country)
                await newOne.setExperienceType(req.body.type)
                await newOne.setCriterion(req.body.criteria)
                res.status(200).json(newOne)
            } catch (e) {
                res.status(400).json(e);
            }
    
        });
    }
}

module.exports = ExperienceRouter;