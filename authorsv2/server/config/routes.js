const mongoose = require('mongoose');
const PrimaryObject = mongoose.model('PrimaryObject');
const mainController = require("../controllers/mainController.js")

module.exports = function (app) {
    app.get('/api/findAll', (req, res) => {
        mainController.find_all(req, res);
    })
    app.get('/api/findOne/:id', (req, res) => {
        mainController.find_by_id(req, res);
    })
    app.post('/api/create', (req, res) => {
        mainController.create(req, res);
    })
    app.put('/api/edit/:id', (req, res) => {
        mainController.update_by_id(req, res);
    })
    app.delete('/api/delete/:id', (req, res) => {
        mainController.delete_by_id(req, res);
    })
}
