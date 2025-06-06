import { Langbase } from "langbase";
import 'dotenv/config';

const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY!,
});

async function main() {
  const supportAgent = await langbase.pipes.create({
    name: 'ai-support-agent',
    description: 'AI support agent to support users with their queries',
    messages: [
        {
            role: 'system',
            content: 'You are a helpful AI support agent. Answer the user queries based on the knowledge base.'
        }
    ],
    
  });
  console.log("Ai support agent ============>", supportAgent);
}

main();