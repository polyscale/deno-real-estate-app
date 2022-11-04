import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { env } from "../lib/env.ts";

const pool = new Pool(
  {
    user: env.POSTGRES_USER,
    database: env.POSTGRES_DATABASE,
    password: env.POSTGRES_PASSWORD,
    hostname: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    applicationName: env.POSTGRES_APPLICATION_NAME,
  },
  20,
  true
);

export const query = async <D>(query: string) => {
  const client = await pool.connect();
  let result;
  try {
    result = await client.queryObject<D>(query);
  } finally {
    client.release();
  }
  return result;
};
