import {NextApiRequest, NextApiResponse} from 'next';
import prisma from 'src/server/utils/prisma';

export function createContext({
  req,
  res
}: {
  req: NextApiRequest,
  res: NextApiResponse
}) {
  prisma
  return {req, res, prisma};
}

export type Context = ReturnType<typeof createContext>;