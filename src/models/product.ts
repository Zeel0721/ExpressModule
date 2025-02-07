import mongoose, { Types } from "mongoose";
import { IProduct } from "../utils/types";
import User from "./user";
import { autopopulate } from "../utils/functions";

export const productSchema = new mongoose.Schema<IProduct>({
    productsname: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    createdBy: {
        type: Types.ObjectId,
        ref: User.modelName,
    },
});

autopopulate(productSchema);

const Product = mongoose.model<IProduct>("products", productSchema);

export default Product;
