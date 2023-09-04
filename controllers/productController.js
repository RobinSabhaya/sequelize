const product = require("../db/models/productSchema");
const productController = {
  async postProduct(req, res) {
    // const {name,price} = req.body;
    try {
      const productData = await product.bulkCreate(req.body);
      return res.status(201).json({
        status: 200,
        message: "Product created successfully",
        productData: productData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
    //    return res.status(301).redirect('/allproduct')
  },
  // async getupdateProduct(req,res){
  //     const {id} = req.params;
  //     // const updateProduct = await product.findOne({where : {productid : id}});
  //     // return res.status(200).render('updateProduct',{updateProduct : updateProduct})
  //     return res.status(200).json({
  //         status : 200,
  //         message : "product update successful"
  //     })
  // },
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const productData = await product.update(
        { name: name, price: price },
        {
          where: {
            productid: id,
          },
        }
      );
      return res.status(200).json({
        status: 200,
        message: "product updated successful",
        productData: productData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const productData = await product.destroy({
        where: {
          productid: id,
        },
      });
      return res.status(200).json({
        status: 200,
        message: "product deleted successful",
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },
  async allProduct(req, res) {
    const allProduct = await product.findAll();
    // return res.status(200).render('allProduct',{allProduct : allProduct})
    return res.status(200).json({
      status: 200,
      data: allProduct,
    });
  },
  async getOne(req, res) {
    const { id } = req.params;
    const productData = await product.findOne({
      where: {
        productid: id,
      },
    });
    return res.status(200).json({
      staus: 200,
      message: "success",
      productData: productData,
    });
  },
};

module.exports = productController;
