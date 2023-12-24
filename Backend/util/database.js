const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('products', 'root', 'Spathak@1', {
    dialect: "mysql",
    host: 'localhost'
})
module.exports = sequelize