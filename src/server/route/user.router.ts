import { createRouter } from "@server/createRouter";
import z from "zod";

export const userRouter = createRouter()
    
  .mutation('register-user', {
    input: z.object({
      name: z.string()
    }),
    resolve: async (data) => {
      
      return {hello: `world from tRPC! name: ${data.input.name}`};
    }
  })

  .query('hello', {
    resolve: (ctx) => {
      return {
        hello: `world from tRPC query!`
      }
    }
  })