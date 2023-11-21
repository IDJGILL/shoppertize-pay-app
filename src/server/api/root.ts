import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { pay } from "./routers/pay";

export const appRouter = createTRPCRouter({
  pay: publicProcedure.mutation(async () => {
    return await pay();
  }),
});

export type AppRouter = typeof appRouter;
