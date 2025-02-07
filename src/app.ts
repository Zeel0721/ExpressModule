import express from "express";
import router from "./router";
import connectDB from "./dbConnection";

const app = express();

app.use(express.json());
app.use("/", router);

export async function initApp() {
    try {
        await connectDB();
        console.log("Connection to database established successfully");
    } catch (error) {
        console.log(
            "Error connecting to Database check connection string or check Connection function"
        );
    }
}

export default app;
