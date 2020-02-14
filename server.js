const express = require('express')
const mongoose = require('mongoose')
require('./src/models/Riddle')
const apiRoutes = require('./src/routes')
const bodyParser = require('body-parser')
require('dotenv').config()

const { APP_CONNECT, APP_PORT } = process.env

app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', apiRoutes);


const start = async () => {
    try {
        await mongoose.connect(APP_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        app.listen(APP_PORT)
    } catch(error) {
        console.log('ERROR: ' + error)
    }
}

start().then(() => {
    console.log('Successfully connect and listen: ' + APP_PORT)
})