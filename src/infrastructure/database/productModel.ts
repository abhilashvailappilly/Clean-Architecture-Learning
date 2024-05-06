import mongoose, { Schema, Model } from "mongoose";
import Product from "../../domain/product";

const productSchema:Schema<Product>=new Schema({
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true
    }
    // creationTime: {
    //     type: Date,
    //     default: Date.now
    // }
});

const ProductModel:Model<Product>=mongoose.model<Product>('product',productSchema);
export {ProductModel} 