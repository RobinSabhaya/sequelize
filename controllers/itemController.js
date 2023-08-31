const product = require('../db/models/productSchema');
const orderItem  = require('../db/models/itemSchema')

const itemController = {
    async getItem (req,res) {
        const orderData = await orderItem.findAll();
        return res.status(200).json({
            status : 200,
            message : "success",
            orderData : orderData
        })
    },
    async postItem (req,res) {
       const {productId,qty,price} = req.body;
       const orderData = await orderItem.create({productId : productId,qty : qty, price: price});
       return res.status(201).json({
        status : 200,
        message  : "orderitem created successfully",
        orderData : orderData
       })
    },
    async getOne(req,res){
        const {id} = req.params;
        const orderData = await orderItem.findOne({where : {id : id}});
        return res.status(201).json({
            status : 200,
            orderData : orderData
        })
    }
};

module.exports = itemController;