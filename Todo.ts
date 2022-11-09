import { DataTypes , Model } from "sequelize";
import { sequelize } from '../instances/pg';

export interface TodosTypes extends Model{
    id: number  ,
    title: string , 
    done: boolean
}

export const Todo  = sequelize.define<TodosTypes>('Todo' , {
    id:{
        autoIncrement:true ,
        primaryKey:true,
        type: DataTypes.INTEGER
    } , 
    title: {
        type: DataTypes.STRING
    } ,
    done: {
        type: DataTypes.BOOLEAN , 
        defaultValue: false
    }
} , {
    tableName: 'todo-list' , 
    timestamps: false
});