const { DataTypes } = require('sequelize')
const sequelize = require('../services/db')

const client = sequelize.define('Client',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    cpf:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true,
    },
    cnpj:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true,
    }
},
{
    tableName:'client',
    timestamps:true,
});

module.exports = client;