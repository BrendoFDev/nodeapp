const orderService = require('../services/orderService')

exports.createOrder = async (req, res) => {
    try{
        const response = await orderService.createOrder(req.body);
        return res.status(response.status)
        .json(response)
    }
    catch(Exception){
        return res.status(500)
        .json({message:"Erro ao criar pedido"});
    }
}

exports.getAllOrders = async (req,res) => {
    try{
        const response = await orderService.getAllOrders()
        return res.status(response.status).json(response.data)
    }
    catch(Exception){
        console.log(Exception);
        return {status:500, message:"Erro ao pesquisar pedido", Exception};
    }
}