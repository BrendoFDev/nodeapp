const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');
const clientController = require('./controllers/clientController');
const screenController = require('./controllers/screenController');

//screen
router.post('/login', userController.login)
router.get('/login', screenController.login)
router.get('/index',screenController.index)
//user
router.post('/user',userController.createUser)


//order
router.post('/order',orderController.createOrder)
router.get('/order', orderController.getAllOrders)

//client
router.post('/client', clientController.createClient)

module.exports = router;