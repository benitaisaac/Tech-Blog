const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
 //TODO: add bcrypt code here to compare password
 //look at example, use compareSync
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [6],
            },
        },
    },
    {
        //TODO: add hooks here for password hashing
        sequelize,
        timestamps: false,
        freezeTableName: true,
        //This will use snake case instead of camel casing for column names in SQL 
        underscored: true,
        modelName: 'user',
    }
)

module.exports = User;