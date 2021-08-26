import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../model/user";
import { userRepository } from "./repository/users.repository";

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
      case "POST":
        connectUser(req, res);
        break;
      default:
        break;
    }

    return resolve(true);
  });
}

const getUsersList = async (res: NextApiResponse) => {
  const users = await userRepository.getUsersList();
  res.status(200).json(users);
};

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await userRepository.addUser(req.body.name);

    res.status(200).json(true);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const connectUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { user1Id, user2Id } = req.body;

    await userRepository.connectUser(user1Id, user2Id);
    await userRepository.connectUser(user2Id, user1Id);

    res.status(200).json(true);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
