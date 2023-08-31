const customer = require('../db/models/customerSchema')
const order = require('../db/models/orderSchema');
const customerController = {
    async getCustomer (req,res){
        const customerData = await customer.findAll();
        // return res.status(200).render('customer');
        return res.status(200).json({
            status : 200,
            customerData : customerData
        });
     },
    async getOne (req,res){
        const {id} = req.params;
        const customerData = await customer.findOne({
            where : {
                id : id
            }
        });
        return res.status(200).json({
            staus : 200,
            message : "success",
            customerData : customerData
        })
    },
    async postCustomer (req,res){
        // const {name,email,address,mobile} = req.body;
       await customer.create(req.body);
    //    return res.status(301).redirect('/order');
    return res.status(200).send("Customer created successfully")
    },
    async all(req,res){
        const data =  await customer.findAll({include : [{
            model : order
        }]});
        // return res.status(200).render('all',{data : data})
        return res.status(200).json({
            status : 200,
            data : data
        });
    },
   async updateCustomer(req,res){
    const {id} = req.params;
    const {name,email,address,mobile} = req.body;
       await customer.update(req.body,{
        where : {
            id : id
        }
       });
    //    return res.status(301).redirect('/all')
    return res.status(200).json({
        status : 200,
        message : "customer updated successful"
    })
    },
    // async getEdit (req,res){
    //     const {id} = req.params;
    //     const updateCustomer = await customer.findOne({where : { id : id}})
    //      return res.status(200).render('updateCustomer',{updateCustomer : updateCustomer});
    // },
    async deleteCustomer (req,res){
        const {id} = req.params;
        await customer.destroy({where : {id : id}});
        return res.status(200).json({
            status : 200,
            message : "product deleted successful"
        })
    },
    // getDelete (req,res) {
    //     return res.status(200).render('delete');
    // }
};

module.exports = customerController;