require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let user = require('./controllers/usercontroller');

sequelize.sync();
app.use(require('./middleware/headers'));
app.use(express.json());
//all routes below here will JSON-ify, anything above will NOT.

app.use('/user', user);
app.use(require('./middleware/validate-session'));


app.listen(3000, function(){
    console.log("App is listening on port: 3000")
});