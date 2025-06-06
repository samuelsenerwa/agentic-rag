import { Langbase } from "langbase";
import 'dotenv/config';

const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY!,
});

export async function runMemoryAgent(query: string) {
    const chunks = await langbase.memories.retrieve({
        query,
        topK: 5,
        memory:[
            {
                name: 'knowledge-base',
            }
        ]
    });

    return chunks;
}
    
