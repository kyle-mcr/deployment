const mongoose = require('mongoose');
const PrimaryObject = mongoose.model('PrimaryObject');


module.exports = {
    find_all: (req, res) => {
        PrimaryObject.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    find_by_id: (req, res) => {
        PrimaryObject.findById({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        console.log("line 17", req.body)
        PrimaryObject.create(req.body)
            .then(data => {
                console.log(data)
                res.json(data)})
            .catch(err => res.json(err));
    },
    update_by_id: (req, res) => {
        PrimaryObject.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete_by_id: (req, res) => {
        PrimaryObject.findByIdAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};
