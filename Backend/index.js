const express = require('express')
const bodyParser = require('body-parser')


//IMPORTING MIDDLEWARES
const cors = require('cors')


// IMPORTING ROUTES
const router = require('./routes/testRoutes')


//APP
const app = express()


// APPLYING MIDDLEWARES 
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

//APPLYING ROUTES
app.use('/user', router)


// LISTENING 
app.listen(5000, () => {
    console.log("App started ..")
})