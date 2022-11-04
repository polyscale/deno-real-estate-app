import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const pool = new Pool(
  {
    user: "demo",
    database: "demo",
    password: "demo",
    hostname: "localhost",
    port: 5432,
  },
  20
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
