import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript"; 
import { Product } from "../../products/models/product.model";

@Table({ tableName: 'category' }) 
export class Category extends Model { 
    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    }) 
    name!: string; 

    @Column({ 
        type: DataType.TEXT, 
        allowNull: false, 
    }) 
    description!: string; 

    @HasMany(() =>Product)
    product!: Product[]
} 