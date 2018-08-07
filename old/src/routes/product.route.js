const express = require('express');

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const productController = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', productController.test);
module.exports = router;
