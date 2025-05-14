import db from '../models/index.js';

export class CategoryController {
  async cteateCategory(req, res) {
    try {
      const category = await db.Category.create(req.body);
      console.log(category);

      return res.status(201).json({
        statusCode: 201,
        message: 'success✅',
        data: category,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async getAllCategories(req, res) {
    try {
      const categories = await db.Category.findAll({ includes: true });
      return res.status(200).json({
        statusCode: 200,
        message: 'success✅',
        data: categories,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async getCategoryById(req, res) {
    try {
      const { id } = req.params;
      const category = await db.Category.findByPk(id);

      if (!category) {
        return res.status(404).json({
          message: 'Category not found',
        });
      }

      return res.status(200).json({
        statusCode: 200,
        message: 'success✅',
        data: category,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await db.Category.update(req.body, {
        where: { id },
      });

      if (!updated) {
        return res.status(404).json({
          message: 'Category not found',
        });
      }

      const updatedCategory = await db.Category.findByPk(id);
      return res.status(200).json({
        statusCode: 200,
        message: 'success✅',
        data: updatedCategory,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const deleted = await db.Category.destroy({
        where: { id },
      });

      if (!deleted) {
        return res.status(404).json({
          message: 'Category not found',
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
