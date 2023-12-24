const product = require('../models/products')


const productController = {
    addProduct(req, res) {
        console.log(req.body);
        const productName = req.body.productName
        const productId = req.body.id
        const quantity = req.body.quantity
        const price = req.body.price
        product.create({
            productName: productName,
            price: price,
            quantity: quantity
        })
            .then((addedProd) => {

                res.send({ productName, quantity, price, id: addedProd.id })
            })
            .catch(err => console.log(err))


    },

    getProducts(req, res) {
        product.findAll()
            .then((val) => {
                res.send(val)
            })
    },

    deleteProduct(req, res) {
        const id = req.body.id
        product.findAll({ where: { id: id } })
            .then((products) => {
                return products[0].destroy()
            })
            .then(() => {
                console.log("deleted")
                res.send({ status: "deleted" })
            })
            .catch(err => console.log(err))

    },

    editProduct(req, res) {
        const id = req.body.id;
        const productName = req.body.productName;
        const price = req.body.price;
        const quantity = req.body.quantity;

        product.findAll({ where: { id: id } })
            .then((products) => {
                const product = products[0];
                product.productName = productName;
                product.price = price;
                product.quantity = quantity;
                return product.save();
            })
            .then(() => {
                res.send({ status: "Updated" });
            })
            .catch(err => console.log(err));
    }



}


module.exports = productController