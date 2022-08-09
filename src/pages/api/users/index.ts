import { User } from '@prisma/client';
import { Body, createHandler, Get, Param, Post, ValidationPipe } from '@storyofams/next-api-decorators';
import { IsNotEmpty } from 'class-validator';
import prisma from 'lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

class Rs {
  users?: User[];

  constructor(users: User[]) {
    this.users = users;
  }
}

class UsersDto {
  @IsNotEmpty()
  hello: string;
}

// export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
//   try {
//     const users = await prisma.user.findMany();
    
//     res.status(200).json({ success: true, users: users });
//   } catch(e: any) {
//     res.status(500).json({ success: false, message: e.message });
//   }
// }

class UserHandler {
  
  @Get()
  async getAll() {
    try {
      const users = await prisma.user.findMany();
      
      return new Rs(users);
    } catch(e: any) {
      throw new Error("there is an error");
    }
  }

  @Post()
  async addUser(@Body(ValidationPipe) user: UsersDto) {
    return "User Added";
  }

  
}

export default createHandler(UserHandler);