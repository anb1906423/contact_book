const { BadRequestError } = require("../errors")

exports.create = (req, res) => {
    res.send({ message: "create handler" })
}

exports.findAll = (req, res) => {
    res.send({ message: "findAll handler" })
}

exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" })
}

exports.update = (req, res) => {
    res.send({ message: "update handler" })
}

exports.delete = (req, res) => {
    res.send({ message: "delete handler" })
}

exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler" })
}

exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler" })
}

// Buoi 02
exports.create = async (req, res, next) => {
    if (!req.body.name) {
        return next(new BadRequestError(400, 'Name can not be empty'))
    }

    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    })
}