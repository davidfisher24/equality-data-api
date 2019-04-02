const express = require('express');
const path = require('path');
const { createReadStream } = require('fs')

class AssetRouter {
	constructor() {

		this.router = express.Router();

		this.mimeType = {
		  html: 'text/html',
		  txt: 'text/plain',
		  css: 'text/css',
		  gif: 'image/gif',
		  jpg: 'image/jpeg',
		  png: 'image/png',
		  svg: 'image/svg+xml',
		  js: 'application/javascript'
		};

		this.router.route('/*').all(async (req, res) => {

			var file = req.originalUrl.replace(/\/assets\//g, '')
			var route = path.join(__dirname, '../assets/', file);
			var type = this.mimeType[path.extname(file).slice(1)] || 'text/plain';

			var s = createReadStream(route);
			s.on('open', function () {
			    res.set('Content-Type', type);
			    s.pipe(res);
			});
			s.on('error', function () {
			    res.set('Content-Type', 'text/plain');
			    res.status(404).end('Not found');
			});
		});
    }

    build(){
    	return this.router;
    }
}


module.exports = AssetRouter;
