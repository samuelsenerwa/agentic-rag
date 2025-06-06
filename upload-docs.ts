import { Langbase } from "langbase";
import 'dotenv/config';
import { readFile } from "fs/promises";


const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY!,
});

async function main () {
    const cwd = process.cwd();
    const memoryName = 'knowledge-base';

    // upload auditor general pdf report
    const auditorGeneralPdfPath = await readFile(`${cwd}/auditor-general.pdf`);
    const agentResult = await langbase.memories.documents.upload({
        memoryName,
        contentType: 'application/pdf',
        documentName: 'auditor-general.pdf',
        document: auditorGeneralPdfPath,
        meta: {
            category: 'report',
            topic: 'county-governments',
        }
    });

   console.log(agentResult.ok ? '✓ Agent doc uploaded' : '✗ Agent doc failed');
}

main();