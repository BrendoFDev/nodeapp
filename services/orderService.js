const order = require("../models/orderModel")
const sequelize = require('../services/db')
const client = require("../models/clientModel")

exports.createOrder = async (body) =>{
    try{

        if(!clientExists())
            return {status:500, message:"Erro ao criar pedido, cliente não existe!"}
    
        let newOrder = await order.create({code: body.Code, creationDate: body.CreationDate, clientId: body.Client})

        if(newOrder==null)
            return {status:500, message:"Erro ao criar pedido"}

        return {status:200, message:"Pedido criado com sucesso",data:newOrder}
    }
    catch(Exception){
        console.log(Exception);
        return {status:500, message:"Erro ao criar pedido", Exception};
    }
}

async function clientExists(clientId){
    const client = await client.findByPk(clientId);

    if(client == null)
        return false

    return true;
}

exports.getAllOrders = async () =>{
    try{
        const orders = await order.findAll({
            include: {
                model: client,
                as: 'client',  // Alias utilizado na associação
                attributes: ['id', 'name', 'cpf', 'cnpj'],  // Campos do cliente que você deseja retornar
            },
        });

        if(orders.length==0)
            return {status:200, message:"Nenhum pedido foi encontrado"}

        return {status:200, data: orders}
    }
    catch(Exception){
        console.log(Exception);
        return {status:500, message:"Erro ao pesquisar pedido", Exception};
    }
}