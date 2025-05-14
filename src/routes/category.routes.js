import { Router } from 'express';
import { CategoryController } from '../controller/category.controller.js';

const router = Router();
const controller = new CategoryController();

router
  .post('/', controller.cteateCategory)
  .get('/', controller.getAllCategories)
  .get('/:id', controller.getCategoryById)
  .patch('/:id', controller.updateCategory)
  .delete('/:id', controller.deleteCategory);

export default router;
