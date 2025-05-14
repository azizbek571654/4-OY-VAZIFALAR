import db from '../models/index.js';

export class ProductController {
  async cteateproduct(req, res) {
    try {
      const product = await db.Product.create(req.body);

      return res.status(201).json({
        statusCode: 201,
        message: 'success✅',
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await db.Product.findAll();
      return res.status(200).json({
        statusCode: 200,
        message: 'success✅',
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  // Get product by ID
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await db.Product.findByPk(id);

      if (!product) {
        return res.status(404).json({
          message: 'Product not found',
        });
      }

      return res.status(200).json({
        statusCode: 200,
        message: 'success✅',
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  // Update product
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await db.Product.update(req.body, {
        where: { id },
      });

      if (!updated) {
        return res.status(404).json({
          message: 'Product not found',
        });
      }

      const updatedProduct = await db.Product.findByPk(id);
      return res.status(200).json({
        statusCode: 200,
        message: 'success✅',
        data: updatedProduct,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  // Delete product
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const deleted = await db.Product.destroy({
        where: { id },
      });

      if (!deleted) {
        return res.status(404).json({
          message: 'Product not found',
        });
      }

      return res.status(200).json({
        statusCode: 200,
        message: 'success✅',
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}
