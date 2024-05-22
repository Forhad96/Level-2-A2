import {Model, Schema, model} from 'mongoose';
import { TOrder } from './orders.interface';


const OrderSchema = new Schema<TOrder>({
    email:{type:String,require:true},
    productId:{type:String,require:true},
    price:{type:Number,require:true},
    quantity:{type:Number,require:true},


})


// create model and export 
export const OrderModel = model<TOrder>("Orders",OrderSchema)