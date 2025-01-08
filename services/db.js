const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.HOST_DATABASE,
    process.env.HOST_USER, 
    process.env.HOST_PASSWORD,
    {
        host:process.env.HOST_SERVER,
        dialect:'postgres',
        logging:false
    });

(async() => {
    try{
        await sequelize.authenticate();
    }
    catch(exception){
        console.log("Erro ocorreu: ", exception)
    }
})();

module.exports = sequelize;