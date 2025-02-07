import "dotenv/config";
import app from "./app";

const port: number = Number(process.env.PORT) || 3000;

async function startServer() {
    try {
        app.listen(port, () => {
            console.log(`Express successfully running on port ${port}`);
        });
    } catch (error) {
        console.log(
            "Error encountered running express application check Application initialization function"
        );
    }
}

startServer();
