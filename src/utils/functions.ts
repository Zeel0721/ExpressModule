import { Schema } from "mongoose";

export function autopopulate(schema: Schema) {
    schema.pre("find", function () {
        this.populate("createdBy", "-_id username email");
    });
}
