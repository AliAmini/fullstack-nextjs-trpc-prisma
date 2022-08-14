import { User } from "@prisma/client";
import { PasswordHelper } from "@server/helper/password.helper";
import prisma from "@server/utils/prisma";
import { UserRegisterRq, UserRegisterRs } from "./rq-rs/register";

export default class UserService {

  async userRegister(userData: UserRegisterRq): Promise<UserRegisterRs>  {
    const {rePassword, ...userRawData} = userData;

    if(rePassword !== userData.password) throw new Error("two passwords are not the same!");

    userRawData.password = PasswordHelper.hash(userRawData.password);

    const user = await prisma.user.create({
      data: userRawData
    });

    return new UserRegisterRs(user);
  }

}