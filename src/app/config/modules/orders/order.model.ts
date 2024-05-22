import {Model, Schema, model} from 'mongoose';
import { TOrder } from './orders.interface';


// {
//     "email": "level2@programming-hero.com",
//     "productId": "5fd67e890b60c903cd8544a3",
//     "price": 999,
//     "quantity": 1
// }


const OrderSchema = new Schema<TOrder>({
    email:{type:String,require:true},
    productId:{type:String,require:true},
    price:{type:Number,require:true},
    quantity:{type:Number,require:true},


})


// create model and export 
export const OrderModel = model<TOrder>("Orders",OrderSchema)