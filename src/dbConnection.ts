import "dotenv/config";
import { Db, MongoClient } from "mongodb";
import { CollectionInterface } from "./types";

const dbConnectionString: string = process.env.DB_CONNECTION as string;
const dbName: string = "Inventory";
let dbClient: MongoClient;
let db: Db;
let collection: CollectionInterface;

export default async function connectDB(): Promise<CollectionInterface> {
    if (!dbClient) {
        dbClient = new MongoClient(dbConnectionString);
        await dbClient.connect();
        console.log("Db collection called");
        db = dbClient.db(dbName);
        collection = {
            userCollection: db.collection("users"),
            companyCollection: db.collection("companies"),
            productCollection: db.collection("products"),
            orderCollection: db.collection("orderlists"),
        };
    }
    return collection;
}

export function getDB(): CollectionInterface {
    if (!collection) {
        throw new Error(
            "No collection found, Please check database connection"
        );
    }
    return collection;
}
