import {  Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
export interface ICompanyCreationArt {
    name: string;
    phone: string;
    email: string;
    addres: string;
  }

@Table({tableName: 'company', timestamps: true})
export class Company extends Model<Company, ICompanyCreationArt> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      })
      declare id: number
    
      @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      })
      name: string;
    
      @Column({
        type: DataType.STRING,
      })
      phone: string;
      
      @Column({
        type: DataType.STRING,
      })
      email: string;
      
      @Column({
        type: DataType.STRING,
      })
      addres: string;

}
