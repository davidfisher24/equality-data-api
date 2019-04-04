const Router = require('./Router')
const _ = require('lodash')

class ExperienceRouter extends Router {
	constructor() {
        super('Experience');
        this.addPostRoute()
        this.addPutRoutes()
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
                if (req.body.country) {
                    let country = await this.models['Country'].findOne({
                        where: { wbcodev2: req.body.country }
                    })
                    await newOne.setCountry(country.id)
                }
                await newOne.setCategory(parseInt(req.body.category));
                await newOne.setExperienceType(parseInt(req.body.type))
                res.status(200).json(newOne)
            } catch (e) {
                res.status(400).json(e);
            }
    
        });
    }

    addPutRoutes(){
        this.router.route('/validate/:id').put(async (req, res) => {
            try {
                await this.model.updateValidatedById(req.params.id);
                res.sendStatus(202)
            } catch (e) {
                res.status(400).json(e);
            }
        });

        this.router.route('/report/:id').put(async (req, res) => {
            try {
                await this.model.updateReportedById(req.params.id);
                res.sendStatus(202)
            } catch (e) {
                res.status(400).json(e);
            }
        });
    }

    findAllQuery(query){
        return {
            where: query,
            include: { 
                all: true,
            }
        }
    }
}

module.exports = ExperienceRouter;