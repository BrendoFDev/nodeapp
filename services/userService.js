const user = require('../models/userModel')
const sequelize = require('../services/db')

exports.createUser =  async (req,res) => {

    try{
        let body = req.body;
        await user.create({name: body.Name, email: body.Email, password: body.Password});
        return {status:200, message:"Usuário criado com sucesso"};
    }
    catch(Exception){
        console.log(Exception)
        return {status:400, message:"Erro ao criar usuário: ", Exception};
    }
}

exports.userLogin = async (req, res) => {
    try{
        const {Email, Password} = req.body;
        const user = await getUser(Email,Password);
        
        if(user != null){
            req.session.user = {
                username:user.Email,
                password:user.password
            };
    
            res.render('index');
        }
        else
            res.render('login');
        
    }
    catch(error){
        console.log(error);
        return {status:500, message:`Erro ao logar: ${Exception}`};
    }
}

async function getUser(Email, Password){
    try{
        const user = await user.findOne({
            where:{
                "email":Email,
                "password":Password
            }
        });

        return user;
    }
    catch(error){
        console.log(error);
        return null;
    }   
}