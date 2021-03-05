require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let user = require('./controllers/usercontroller'); 
let valuables = require('./controllers/valuablescontroller')

sequelize.sync();
app.use(require('./middleware/headers'));
app.use(express.json());
//all routes below here will JSON-ify, anything above will NOT.

app.use('/user', user);
app.use('/valuables', valuables);


app.listen(process.env.PORT, function(){
    console.log(`App is listening on port: ${process.env.PORT}`)});

