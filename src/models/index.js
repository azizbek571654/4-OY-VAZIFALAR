import { Sequelize, DataTypes } from 'sequelize';
import config from '../config/index.js';
import Category from './category.module.js';
import Product from './product.module.js';

const sequelize = new Sequelize(config.PG_DB, config.PG_USER, config.PG_PASS, {
  host: config.PG_HOST,
  dialect: config.DB_DIALECT,
});
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Category = Category(sequelize, DataTypes);
db.Product = Product(sequelize, DataTypes);

db.Category.hasMany(db.Product, { foreignKey: 'category_id' });
db.Product.belongsTo(db.Category, { foreignKey: 'category_id' });

export default db;
