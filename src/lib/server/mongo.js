
import { MongoClient , ServerApiVersion} from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });
    
let db;

export async function getDB() 
{
  if (!db) 
  {
    await client.connect();
    db = client.db(MONGODB_DB);
    console.log("✅ Connected to MongoDB");
  }
  return db;
}
