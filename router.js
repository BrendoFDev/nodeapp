const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController')
const orderController = require('./controllers/orderController') 
const clientController = require('./controllers/clientController');


router.post('/user',userController.createUser)

//#region Order
router.post('/order',orderController.createOrder)
router.get('/order', orderController.getAllOrders)

//#endregion
router.post('/client', clientController.createClient)

module.exports = router;