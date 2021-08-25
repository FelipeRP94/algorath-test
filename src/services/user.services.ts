import { User } from "../model/user";
import { defaultRequestConfig } from "./helpers";

const getUsersList = (): Promise<User[]> => {
  return fetch("/api/users", defaultRequestConfig)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Error getting users");
    })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const userService = {
  getUsersList,
};
