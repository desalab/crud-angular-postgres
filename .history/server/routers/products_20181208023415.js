const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controler');

router.get('/', productController.getProduct);
router.post('/', )

module.exports = router;
