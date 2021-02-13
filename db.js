const Sequelize = require('sequelize');
const sequelize = newSequelize('FireLogger-app', 'postgres', 'password', {
    host:'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to FireLogger-app postgres database');
    },
    function(err){
        console.log(err);
    }
);
module.exports = sequelize;