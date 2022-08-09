import { User } from "@prisma/client";
import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { Role } from "types/Role";

interface Data {
  success: boolean,
  message?: any
}

interface Body {
  fullName: string,
  email: string,
  avatar?: string,
  role: Role
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if(req.method !== 'POST') {
    return res.status(405).json({message: "only POST allowed", success: false});
  }

  try {
    const userData: Body = req.body;
    const savedUser: User = await prisma.user.create({ 
      data: userData
    });
  } catch(e: any) {
    return res.status(500).json({success: false, message: e.message});
  }

  return res.status(200).json({success: true});

};