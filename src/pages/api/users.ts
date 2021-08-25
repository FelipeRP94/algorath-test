import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../model/user";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  return new Promise((resolve) => {
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

    return resolve(true);
  });
}

const getUsersList = async (res: NextApiResponse) => {
  const users = await prisma.users.findMany({
    include: {
      connectedUsers: true,
    },
  });
  res.status(200).json(users);
};

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await prisma.users.create({
      data: {
        name: req.body.name,
      },
    });

    res.status(200).json(true);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
