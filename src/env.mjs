import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    PHONEPE_MERCHANT_ID: z.string(),
    PHONEPE_MERCHANT_SALT_KEY: z.string(),
  },
  client: {},

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PHONEPE_MERCHANT_ID: process.env.PHONEPE_MERCHANT_ID,
    PHONEPE_MERCHANT_SALT_KEY: process.env.PHONEPE_MERCHANT_SALT_KEY,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
