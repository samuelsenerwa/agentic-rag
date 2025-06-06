import { runMemoryAgent } from "./agents";

async function main() {
    const chunks = await runMemoryAgent('What is the role of the auditor general?');
    console.log("memory chunks ============>", chunks);
}

main();