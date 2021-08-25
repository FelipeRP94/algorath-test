import { User } from "../model/user";

const getUsersList = (): Promise<User[]> => {
  return Promise.resolve([
    {
      id: 1,
      name: "Felipe Ruiz",
    },
    {
      id: 2,
      name: "Eva Alvarez",
    },
  ]);
};

export const userService = {
  getUsersList,
};
