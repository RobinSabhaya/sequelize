const product = require('../db/models/productSchema')
const productController = {
    async postProduct (req,res){
        // const {name,price} = req.body;
           await product.bulkCreate([req.body]);
           return res.status(201).json({
               status : 200,
               message : "Product created successfully"
            })
            //    return res.status(301).redirect('/allproduct')
    },
    getProduct (req,res){
        return res.status(200).render('product')
    },
    async getupdateProduct(req,res){
        const {id} = req.params;
        // const updateProduct = await product.findOne({where : {productid : id}});
        // return res.status(200).render('updateProduct',{updateProduct : updateProduct})
        return res.status(200).json({
            status : 200,
            message : "product update successful"
        })
    },
    async updateProduct(req,res){
        const {id} = req.params;
        const {name,price} = req.body;
        await product.update({name : name,price : price},{where : {
            productid : id
        }});
        return res.status(200).json({
            status : 200,
            message : "product updated successful"
        })
    },
    async deleteProduct (req,res){
        const {id} = req.params;
        await product.destroy({where : {
            productid : id
        }});
        return res.status(200).json({
            status : 200,
            message : "product deleted successful"
        })
    },
    async allProduct(req,res){
        const allProduct = await product.findAll();
        // return res.status(200).render('allProduct',{allProduct : allProduct})
        return res.status(200).json({
            status : 200,
            data : allProduct
        })
    },
    async getOne (req,res){
        const {id} = req.params;
        const productData = await product.findOne({
            where : {
                productid : id
            }
        });
        return res.status(200).json({
            staus : 200,
            message : "success",
            productData : productData
        })
    },
};

module.exports = productController;