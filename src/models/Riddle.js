var mongoose = require('mongoose')

const Riddle = new mongoose.Schema({
    title: {
        type: String,
        required: 'Заполните название загадки'
    },
    emojies: {
        type: String,
        required: 'Придумайте загадку'
    },
    answer: {
        type: String,
        required: 'Заполните поле ответа'
    },
    points: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Riddles', Riddle)