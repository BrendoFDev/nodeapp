const user = require('../models/userModel')
const sequelize = require('../services/db')

exports.createUser =  async (body) => {

    try{
        await user.create({name: body.Name, email: body.Email, password: body.Password});
        return {status:200, message:"Usuário criado com sucesso"};
    }
    catch(Exception){
        console.log(Exception)
        return {status:400, message:"Erro ao criar usuário: ", Exception};
    }
}