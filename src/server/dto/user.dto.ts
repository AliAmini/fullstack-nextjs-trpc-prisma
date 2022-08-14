import { RoleEnum, User } from "@prisma/client";

export class UserDto {
  id: number;
  fullName: string;
  email: string;
  role: RoleEnum;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.fullName = user.fullName;
    this.email = user.email;
    this.role = user.role;
    this.avatar = user.avatar;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}