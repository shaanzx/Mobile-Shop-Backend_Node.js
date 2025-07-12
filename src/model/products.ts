/*export interface Product {
    id: number;
    name: string;
    price: number;
    currency: string;
    color: string;
    ram: string;
    storage: string;
    image: string;
}*/

import mongoose from "mongoose";

const productModel = new mongoose.Schema(
    {
        "id": {
            required: true, // Like not null
            type: Number,
            unique: true, //Unique key constraints
            index: true, // For better performance
        },
        "name" : {
            required : true,
            type : String,
        },
        "price" : {
            required : true,
            type : Number,
        },
        "currency" : {
            required : true,
            type : String,
        },
        "color" : {
            required : true,
            type : String,
        },
        "ram" : {
            required : true,
            type : String,
        },
        "storage" : {
            required : true,
            type : String,
        },
        "image" : {
            required: true,
            type: String,
        }
    }
);

const Product = mongoose.model('Product', productModel);

export default Product;