import mongoose from "mongoose";
import { IUser } from "../utils/types";

export const userSchema = new mongoose.Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    hashedRt: String,
});

const User = mongoose.model<IUser>("users", userSchema);

export default User;
