import { Column, Model, Table, DataType, BelongsTo, ForeignKey } from "sequelize-typescript"; 
import { Category } from "../../category/model/category.model";

@Table({ tableName: 'product' }) 
export class Product extends Model { 
    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    }) 
    name!: string; 

    @Column({ 
        type: DataType.DECIMAL, 
        allowNull: false, 
    }) 
    price!: number; 
    
    @ForeignKey(() => Category)
    @Column({ 
        type: DataType.INTEGER, 
        allowNull: false
    }) 
    categoryId!: number;

    @BelongsTo(() => Category, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    category!: Category;
} 

