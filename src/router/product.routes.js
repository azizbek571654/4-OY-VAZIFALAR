import { Router } from 'express';
import { productController } from '../controller/product.controller.js';

const router = Router();
const controller = new productController();

router
  .post('/', controller.createProduct)
  .get('/', controller.getAllproducts)
  .get('/:id', controller.getproductById)
  .patch('/:id', controller.updateProductById)
  .delete('/:id', controller.deleteProductById);

export default router;
