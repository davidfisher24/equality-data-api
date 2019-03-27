var express     = require('express');
var bodyParser  = require('body-parser');
var dotenv      = require('dotenv').config();
var cors 		= require('cors');
var postgre  	= require('pg');
var models 		= require('./models')

var app         = express();

app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes')

app.use(function(req, res, next) {
  req.url = req.url.replace(/\/\//, '/');
  next();
});
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/criteria', routes.criteriaRouter);
app.use('/category', routes.categoryRouter);
app.use('/country', routes.countryRouter);
app.use('/income-group', routes.incomeGroupRouter);
app.use('/region', routes.regionRouter);
app.use('/data', routes.dataRouter);

app.all('*', function(req, res) {
    return res.status(404).json({
        name: "RouteNotFound",
        message: 'Route Not Found',
        route: req.path,
    })
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app;