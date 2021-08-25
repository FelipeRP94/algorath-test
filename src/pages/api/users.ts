import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../model/user";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  switch (req.method) {
    case "GET":
      getUsersList(res);
      break;
    case "PUT":
      addUser(req, res);
      break;
    default:
      break;
  }
}

const getUsersList = async (res: NextApiResponse) => {
  const users = await prisma.users.findMany();
  res.status(200).json(users);
};

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const newUser = await prisma.users.create({
    data: {
      name: req.body.name,
    },
  });

  res.status(200);
};
