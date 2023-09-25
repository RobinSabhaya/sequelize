const product = require("../db/models/productSchema");
const productController = {
  async postProduct(req, res) {
    if (req.xhr) {
      try {
        const productData = await product.create(req.body);
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
    }
    await product.create(req.body);
    return res.status(302).redirect("/product");
  },
  async updateProduct(req, res) {
    if (req.xhr) {
      try {
        const { id } = req.params;
        const { name, price } = req.body;
        const productData = await product.update(
          { name: name, price: price },
          {
            where: {
              id: id,
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
    }
  },
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await product.destroy({
        where: {
          id: id,
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
    if (req.xhr) {
      const allProduct = await product.findAll();
      return res.status(200).json({
        status: 200,
        data: allProduct,
      });
    }
    const allProduct = await product.findAll();
    return res.status(200).render("product", { productData: allProduct });
  },
  async getOne(req, res) {
    if (req.xhr) {
      const { id } = req.params;
      const productData = await product.findOne({
        where: {
          id: id,
        },
      });
      return res.status(200).json({
        staus: 200,
        message: "success",
        productData: productData,
      });
    }
    const { id } = req.params;
    const productData = await product.findOne({
      where: {
        id: id,
      },
    });
    return res
      .status(200)
      .render("updateProduct", { productData: productData });
  },
  async updatePost(req, res) {
    const { id } = req.params;
    await product.update(req.body, {
      where: { id: id },
    });
    return res.status(302).redirect("/product");
  },
};

module.exports = productController;
