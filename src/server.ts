import { createConnection } from "typeorm";

async function run() {
  await createConnection();
}

run().catch(error => console.error(error));