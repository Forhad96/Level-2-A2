import {Model, Schema, model} from 'mongoose';
import { TOrders } from './orders.interface';


// {
//     "email": "level2@programming-hero.com",
//     "productId": "5fd67e890b60c903cd8544a3",
//     "price": 999,
//     "quantity": 1
// }


const OrderSchema = new Schema<TOrders>({
    email:{type:String,require:true},
    productId:{type:String,require:true},
    price:{type:Number,require:true},
    quantity:{type:Number,require:true},


})


// create model and export 
export const OrderModel = model<TOrders>("Orders",OrderSchema)