import { json } from "@sveltejs/kit";
import { getDB } from "$lib/server/mongo.js";

export async function GET() 
{
    const db = await getDB();
    const quotes = await db.collection("quotes").find().toArray();

    if (quotes.length === 0) {
        return json({ text: "No quotes yet." });
    }

    // Pick random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return json(randomQuote);
}
