import { Router } from 'express';
import { ProductController } from '../controller/product.controller.js';

const router = Router();
const controller = new ProductController();

router.post('/', controller.cteateproduct)
    .get('/', controller.getAllProducts)
    .get('/:id', controller.getProductById)
    .patch('/:id', controller.updateProduct)
    .delete('/:id', controller.deleteProduct)

export default router;
