import { User } from "@prisma/client";
import { UserDto } from "@server/dto/user.dto";
import { z } from "zod";

export const UserRegisterSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string(),
  rePassword: z.string()
});
export type UserRegisterRq = z.infer<typeof UserRegisterSchema>;

export class UserRegisterRs {
  user: UserDto

  constructor(user: User) {
    this.user = new UserDto(user);
  }
}