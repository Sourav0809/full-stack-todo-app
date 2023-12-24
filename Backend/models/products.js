const sequelize = require('../util/database')
const Sequelize = require('sequelize')

const products = sequelize.define("products", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
    ,
    productName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

})


module.exports = products