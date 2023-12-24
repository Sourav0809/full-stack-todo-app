const express = require('express')
const { addProduct, getProducts, deleteProduct, editProduct } = require('../controller/productController')

const router = express.Router()

router.post('/addProduct', addProduct)

router.get('/getProducts', getProducts)

router.patch('/editProduct', editProduct)

router.delete('/delete', deleteProduct)


module.exports = router