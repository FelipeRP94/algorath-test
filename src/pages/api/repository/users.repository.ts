import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsersList = async () =>
  await prisma.users.findMany({
    include: {
      connectedUsers: true,
    },
  });

const addUser = async (name: string) => {
  await prisma.users.create({
    data: {
      name: name,
    },
  });
};

const connectUser = async (user1Id: number, user2Id: number) => {
  await prisma.users.update({
    where: {
      id: user2Id,
    },
    data: {
      connectedUsers: {
        connect: { id: user1Id },
      },
    },
  });
};

export const userRepository = {
  getUsersList,
  addUser,
  connectUser,
};
