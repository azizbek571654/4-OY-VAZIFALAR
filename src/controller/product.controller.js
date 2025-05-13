import db from '../db/index.js';

export class productController {
  async createProduct(req, res) {
    try {
      const { name, description, price, productsy_id } = req.body;

      const categoryCheck = await db.query(
        'SELECT * FROM category WHERE id = $1',
        [category_id]
      );

      if (categoryCheck.rows.length === 0) {
        return res.status(404).json({ error: 'Category id not found' });
      }

      const result = await db.query(
        'INSERT INTO product (name, description, price, productsy_id) VALUES($1, $2, $3, $4) RETURNING *',
        [name, description, price, productsy_id]
      );

      return res.status(201).json({
        statusCode: 201,
        message: 'Successfull✅',
        data: result.rows[0],
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAllproducts(req, res) {
    try {
      const result = await db.query('SELECT * FROM product');
      return res.status(200).json({
        statusCode: 200,
        message: 'success ✅',
        data: result.rows,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getproductById(req, res) {
    try {
      const result = await db.query('SELECT * FROM product WHERE id = $1', [
        req.params.id,
      ]);

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'product not found' });
      }

      return res.status(200).json({
        statusCode: 200,
        message: 'successfull ✅',
        data: result.rows[0],
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateProductById(req, res) {
    try {
      const { name, description, price, category_id } = req.body;
      const productId = req.params.id;

      const productCheck = await db.query(
        'SELECT * FROM product WHERE id = $1',
        [productId]
      );
      if (productCheck.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }

      const result = await db.query(
        `UPDATE product 
       SET name = $1, description = $2, price = $3, category_id = $4 
       WHERE id = $5 
       RETURNING *`,
        [name, description, price, category_id, productId]
      );

      return res.status(200).json({
        statusCode: 200,
        message: 'updated ✅',
        data: result.rows[0],
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteProductById(req, res) {
    try {
      const productId = req.params.id;

      const productCheck = await db.query(
        'SELECT * FROM product WHERE id = $1',
        [productId]
      );
      if (productCheck.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }

      const result = await db.query(
        'DELETE FROM product WHERE id = $1 RETURNING *',
        [productId]
      );

      return res.status(200).json({
        statusCode: 200,
        message: 'deleted ✅',
        data: result.rows[0],
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
