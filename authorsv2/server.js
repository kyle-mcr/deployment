const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(9000, () => console.log("listening on port 8000"));
