import mongoose, { Types } from "mongoose";
import { IProduct } from "../types";
import User from "./user";

const productSchema = new mongoose.Schema<IProduct>({
    productsname: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    createdBy: {
        type: Types.ObjectId,
        ref: User.modelName,
    },
});

productSchema.pre("find", function () {
    this.populate("createdBy", "-_id username email");
});

const Product = mongoose.model<IProduct>("products", productSchema);

export default Product;
