import { Langbase } from "langbase";
import 'dotenv/config';

const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY!,
});

async function main () {
    const memory = await langbase.memories.create({
        name: 'knowledge-base',
        description: 'Knowledge base for the agent',
        embedding_model: 'openai:text-embedding-3-large',
    });

    console.log("Ai memory ============>", memory);
}

main();
