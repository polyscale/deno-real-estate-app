import * as dotenv from "dotenv";

await dotenv.config({ safe: true, export: true });

export const env = {
  DENO_ENV: Deno.env.get("DEN_ENV") ?? "production",
  POSTGRES_HOST: Deno.env.get("POSTGRES_HOST") ?? "localhost",
  POSTGRES_USER: Deno.env.get("POSTGRES_USER") ?? "demo",
  POSTGRES_PASSWORD: Deno.env.get("POSTGRES_PASSWORD") ?? "demo",
  POSTGRES_DATABASE: Deno.env.get("POSTGRES_DATABASE") ?? "demo",
  POSTGRES_PORT: Deno.env.get("POSTGRES_PORT") ?? 5432,
  POSTGRES_APPLICATION_NAME: Deno.env.get("POSTGRES_APPLICATION_NAME"),
};
