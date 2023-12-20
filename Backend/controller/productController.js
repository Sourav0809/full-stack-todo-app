const fs = require('fs')
const path = require('path')
const productController = {
    addProduct(req, res) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );

        fs.readFile(p, 'utf8', (err, fileContent) => {
            if (!err) {
                const UpdatedData = [...JSON.parse(fileContent), req.body];
                fs.writeFile(p, JSON.stringify(UpdatedData), (err) => { console.log(err) })
                return res.send(UpdatedData)
            }

            fs.writeFileSync(p, JSON.stringify([req.body]), (err) => {
                console.log(err);
            })
            res.send(req.body)

        })
    },

    getProducts(req, res) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );

        fs.readFile(p, 'utf8', (err, fileContent) => {
            if (err) {
                res.send([]);
                console.log(err);
            }
            else {
                res.send(fileContent)
            }
        })


    }
}
module.exports = productController