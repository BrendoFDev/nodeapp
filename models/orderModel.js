const { DataTypes } = require("sequelize")
const sequelize = require("../services/db")
const client = require('./clientModel');

const Order = sequelize.define('Order', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    code:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    creationDate:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    invoiced:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false,
    },
},{
    tableName:'order',
    timestamps:true
});

Order.belongsTo(client,{
    foreignKey:"clientId",
    as:"client"
}); 


module.exports = Order;