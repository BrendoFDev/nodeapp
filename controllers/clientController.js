const clientService = require('../services/clientService')

exports.createClient = async (req,res) =>{
    try{
        const response = await clientService.createClient(req.body);
        return res.status(response.status)
        .json(resonse)
    }
    catch(Exception)
    {
        console.log(Exception   )
        res.status(400).json({
            message:Exception.message || 'Erro ao criar cliente!'
        });
    }
}