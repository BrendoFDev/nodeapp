const client = require('../models/clientModel')

exports.createClient = async (body)=>{
    try{
        let newClient = await client.create({name:body.Name,cpf:body.CPF,cnpj:body.CNPJ});
        
        if(!newClient)
            return {message:"Erro ao criar cliente", status:400}

        return {message:"Cliente criado com sucesso", status:200, data:newClient}
    }
    catch(Exception){
        console.log(Exception);
        return {
            message: "Erro interno ao criar cliente. Tente novamente mais tarde.",
            status: 500,
        };
    }
}