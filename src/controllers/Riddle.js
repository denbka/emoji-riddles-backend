

Riddle = require('../models/Riddle.js')

exports.get = (req, res) => {
    Riddle.find((err, riddle) => {
        if (err) res.send(err)
        res.json(riddle)
    })
}

exports.post = (req, res) => {
    const new_riddle = new Riddle(req.body)
    new_riddle.save((err, riddle) => {
        if (err) res.send(err)
        res.json(riddle)
    })
}

exports.getById = (req, res) => {
    Riddle.findById(req.params.id, (err, riddle) => {
        if (err) res.send(err)
        res.json(riddle)
    })
}

exports.put = (req, res) => {
    Riddle.findOneAndUpdate({
        _id: req.params.id
    }, 
    req.body,
    { new: true },
    (err, riddle) => {
        if (err) res.send(err)
        res.json(riddle)
    })
}

exports.delete = (req, res) => {
    const query = { _id: req.params.id }
    Riddle.deleteOne(query)
    .then(result => res.json({ message: 'Riddle successfully deleted.' }))
    .catch(error => res.send(err))
}