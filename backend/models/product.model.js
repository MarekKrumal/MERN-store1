import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required : true,
    },
},{
    timestamps: true, // vytvoreni createdAt, updatedAt
});

const Product = mongoose.model(`Product`, productSchema); // rilame mongoose vytvor model nebo kolekci nazvanou Product a productSchema je to schema ktere mu dame
// mongoose z toho udela "products"


export default Product;