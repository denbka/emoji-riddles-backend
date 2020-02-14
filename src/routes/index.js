
const app = require('express').Router();
const riddle = require('../controllers/Riddle')

app.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    })
})

app.route('/riddles')
.get(riddle.get)
.post(riddle.post)

app.route('/riddles/:id')
.get(riddle.getById)
.put(riddle.put)
.delete(riddle.delete)


module.exports = app;

