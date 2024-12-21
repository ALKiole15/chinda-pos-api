import { z } from "zod";

// When creating adding new environment variables, add them to the envSchema object and specify their type.
const envSchema = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z
    .enum(["production", "development"])
    .optional()
    .default("development"),
  PORT: z.coerce.number().optional().default(8000),
  JWT_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  CALLBACK_URL: z.string(),
  SESSION_SECRET: z.string(),
  FRONTEND_ORIGIN: z.string(),
});


/**
 * Parsed environment variables. Use this to access environment variables.
 */
export const parsedEnv = envSchema.parse(process.env);


