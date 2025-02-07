import mongoose, { Types } from "mongoose";
import { ICompany } from "../types";

const companySchema = new mongoose.Schema<ICompany>({
    company: { type: String, required: true },
    products: { type: [], required: true },
    createdBy: { type: Types.ObjectId },
});

const Company = mongoose.model<ICompany>("companies", companySchema);

export default Company;
