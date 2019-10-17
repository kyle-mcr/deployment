const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

var models_path = path.join(__dirname, './../models');

mongoose.connect('mongodb://localhost/favorite_authorsv2', { useNewUrlParser: true });

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(models_path + '/' + file);
     }
  })