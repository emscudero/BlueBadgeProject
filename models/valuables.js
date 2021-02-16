module.exports = (sequelize, DataTypes) => {
    const Valuables = sequelize.define('valuables', {
        name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
           year:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
           model:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            serial_number:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            photo:{
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            dollar_value:{
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        })
    
    return Valuables;
    };