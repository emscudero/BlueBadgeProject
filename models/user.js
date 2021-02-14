const { Op, DataTypes } = require("sequelize");
const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            validate:{
                isEmail: true},
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            validate:{
                min: 5},
            allowNull: false
        },

    })
    return User;
}