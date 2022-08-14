import { createRouter } from "@server/createRouter";
import z from "zod";
import { UserRegisterSchema } from "./rq-rs/register";
import UserService from "./user.service";

const userService = new UserService();

export const userRouter = createRouter()
    
  .mutation('register', {
    input: UserRegisterSchema,
    resolve: async (data) => userService.userRegister(data.input)
  })

  .query('hello', {
    resolve: (ctx) => {
      return {
        hello: `world from tRPC query!`
      }
    }
  })