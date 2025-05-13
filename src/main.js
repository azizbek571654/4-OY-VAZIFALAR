import express from 'express';
import { config } from 'dotenv';
import categoryRouter from './router/category.routes.js';
import productRoutes from './router/product.routes.js';
config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/category', categoryRouter);
app.use('/product', productRoutes);

app.listen(PORT, () => console.log('Server running on port', PORT));
