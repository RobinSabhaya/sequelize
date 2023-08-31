require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8000;
const auth = require('./middlewares/auth')
const cors = require('cors');
const route = require('./router/index');
const productController = require('./controllers/productController')
const orderController = require('./controllers/orderController')
const itemController = require('./controllers/itemController');
const customerController = require('./controllers/customerController');
const adminController = require('./controllers/adminController');
const loginController = require('./controllers/loginController');
require('./db/conn');
const app = express();

app.use(cors())
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(route);

route.post('/product',productController.postProduct)
// route.get('/product',productController.getProduct)
route.post('/order',orderController.postOrder)
// route.get('/order',orderController.getOrder)
route.get('/orderitem',itemController.getItem)
route.post('/orderitem',itemController.postItem)
route.get('/customer',customerController.getCustomer)
route.post('/customer',customerController.postCustomer)
route.get('/all',customerController.all)
// route.get('/updatecustomer/:id',customerController.getEdit)
route.patch('/updatecustomer/:id',customerController.updateCustomer)
route.delete('/deletecustomer/:id',customerController.deleteCustomer)
// route.get('/deletecustomer/:id',customerController.getDelete)
route.patch('/updateproduct/:id',productController.updateProduct)
route.delete('/deleteproduct/:id',productController.deleteProduct)
route.get('/allproduct',productController.allProduct)
route.get('/updateproduct/:id',productController.getupdateProduct)
// route.get('/deleteproduct/:id',productController.getdeleteProduct)
route.post('/admin',auth,adminController.postAdmin)
route.post('/login',loginController.postLogin)
route.get('/customer/:id',customerController.getOne)
route.get('/product/:id',productController.getOne)
route.get('/orderitem/:id',itemController.getOne)

app.listen(PORT,()=>{
    console.log(`Express listening on http://localhost:${PORT}/product`)
})