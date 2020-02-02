const express = require('express');
const app = express();

const storesDB = require('./database.json');
const Stores = require('./stores.js');

app.get('/', (request, response) => {
	response.header('Content-type', 'application/json');

	// Get request parameters
	const lat = request.query.lat || null;
	const lng = request.query.lng || null;
	const categories = request.query.categories || [];
	const radius = request.query.radius || null;
	const limit = request.query.limit || null;
	let results = null;

	// // Filter stores if parameters are valid
	if (lat && lng && !isNaN(lat) && !isNaN(lng)) {
		const stores = new Stores({
			database: storesDB,
			lat: lat,
			lng: lng,
			categories: categories,
			radius: radius,
			limit: limit
		});
		results = stores.filter();
	}

	// console.log(request)
	response.status(200).json(results);
});

app.listen(3000);
