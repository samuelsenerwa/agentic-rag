import { runAiSupportAgent, runMemoryAgent } from "./agents";

async function main() {
   const query = 'What is the role of the auditor general?';
   const chunks = await runMemoryAgent(query);
   const completion = await runAiSupportAgent({
       chunks,
       query
   });

   console.log("completion ============>", completion);
}

main();