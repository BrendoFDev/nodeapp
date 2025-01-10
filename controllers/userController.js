const userService = require('../services/userService')

exports.createUser = async (req,res)=>{
   try{
      const response = await userService.createUser(req.body);
      return res.status(response.status).json({message:response.message});
   }
   catch(Exception){
      return res.status(500).json({message: "Erro ao criar usuário"});
   }
}

exports.login = async (req,res) => {
   try{
      const response = await userService.userLogin(req,res);
      return res.status(response.status).json({message:response.message});
   }
   catch(error){
         console.log(error)
         res.status(500).json({message: "Erro ao logar usuário"});
   }
}