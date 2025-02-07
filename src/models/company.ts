import mongoose, { Types } from "mongoose";
import { ICompany, IProduct } from "../utils/types";
import { autopopulate } from "../utils/functions";
import User from "./user";

const companySchema = new mongoose.Schema<ICompany>({
    company: { type: String, required: true },
    products: { type: [String], required: true },
    createdBy: { type: Types.ObjectId, ref: User.modelName },
});

autopopulate(companySchema);

const Company = mongoose.model<ICompany>("companies", companySchema);

export default Company;
