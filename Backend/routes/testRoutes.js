const express = require('express')
const { addProduct, getProducts } = require('../controller/productController')

const router = express.Router()

router.post('/addProduct', addProduct)

router.get('/getProducts', getProducts)


module.exports = router