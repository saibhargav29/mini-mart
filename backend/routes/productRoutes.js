const express =require('express');
const router = express.Router();


const {getAllProducts, getProductById,} = require('../controller/productControllers');
//GET products from DB
//@route GET /api/products
router.get('/', getAllProducts);

//GET a product by id From db
//@route GET /api/products/:id
router.get('/:id', getProductById);

module.exports = router;




