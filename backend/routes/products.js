const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    updateProduct,
    deleteProduct,
    addProduct,
    getProduct
} = require('../controllers/products')
// route 1:
router.route('/')
.get(getAllProducts)
.post(addProduct)
// route 2: query params.
router.route('/:id')
.get(getProduct)
.put(updateProduct)
.delete(deleteProduct)

module.exports = router