import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize'; 
import { ProductsModule } from './products/products.module';
import { Product } from "./products/models/product.model";
import { CategoryModule } from './category/category.module';
import { Category } from "./category/model/category.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({ 
            dialect: 'postgres', 
            host: process.env.PG_HOST, 
            port: Number(process.env.PG_PORT), 
            username: process.env.PG_USER, 
            password: String(process.env.PG_PASS), 
            database: process.env.PG_DB, 
            autoLoadModels: true,
            synchronize: true,
            models:[Product, Category] 
        }),
        ProductsModule,
        CategoryModule
    ],
})
export class AppModule {}