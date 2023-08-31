const order = require('../db/models/orderSchema');
const customer = require('../db/models/customerSchema');
const orderItem = require('../db/models/itemSchema');
const product = require('../db/models/productSchema');

const orderController = {
    // getOrder (req,res){
    //     return res.status(200).render('order')
    // },
    async postOrder (req,res){
        const {totalAmount} = req.body;
        // const customerData = await customer.findOne({where : {name : customerName}});
        await order.create({date : new Date().getDate()})
        // return res.status(301).redirect('/all');
        return res.status(201).json({
            status : 200,
            message : "order created successfully"
        })
    }
}

module.exports = orderController;