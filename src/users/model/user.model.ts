import { Column, Model, Table, DataType } from "sequelize-typescript"; 

@Table({ tableName: 'Users' }) 
export class Users extends Model { 
    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    }) 
    name!: string; 

    @Column({ 
        type: DataType.DECIMAL, 
        allowNull: false, 
    }) 
    password!: number; 
    @Column({ 
        type: DataType.DECIMAL, 
        allowNull: false, 
    }) 
    email!: number; 
} 