const Product = require('../models/product.model');

// Simple version, without validation or sanitation
exports.test = function (req, res) {
	console.log(res);
	res.send('Greetings from the Test controller!');
};
