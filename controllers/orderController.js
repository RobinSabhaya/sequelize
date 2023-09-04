const order = require('../db/models/orderSchema');

const orderController = {
    async getOrder (req,res){
  try {
    const orderData = await order.findAll();
    return res.json({
      status : 200,
      orderData : orderData
    })
  } catch (err) {
    return res.json({
      status : 400,
      err : err.message,
  })
  }
        // return res.status(200).render('order')
    },
    async postOrder (req,res){
      try {
        const {customerId,totalAmount} = req.body;
        const orderData = await order.create({totalAmount : totalAmount,customerId : customerId});
        // return res.status(301).redirect('/all');
        return res.status(201).json({
            status : 200,
            message : "order created successfully",
            orderData : orderData
        })
      } catch (err) {
            return res.json({
                status : 400,
                err : err.message
            })
          }
    },
    async updateOrder(req,res){
      try{
      const {id} = req.params;
      const orderData = await order.update(req.body,{
        where : {
          id : id
        }
      });
      return res.status(200).json({
        status : 200,
        message : "order updated successfully",
        orderData : orderData
    })
  } catch (err) {
        return res.json({
            status : 400,
            err : err.message
        })
      } 
      
    },
    async deleteOrder(req,res){
      const {id} = req.params;
try {
  const orderData = await order.destroy({where : {id : id}});
  return res.status(200).json({
    status : 200,
    message : "order deleted successfully",
    orderData : orderData
})
} catch (err) {
  return res.json({
    status : 400,
    err : err.message
})
}

    }
}

module.exports = orderController;