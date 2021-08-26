import { defaultRequestConfig } from "./helpers";
import { User } from "../model/user";

const getUsersList = (): Promise<User[]> => {
  return fetch("api/users", defaultRequestConfig)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Error getting users");
    })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

const addUser = (name: string): Promise<void> => {
  const requestConfig = {
    ...defaultRequestConfig,
    method: "PUT",
    body: JSON.stringify({ name }),
  };

  return fetch("api/users", requestConfig)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Error creating user");
    })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

const connectUser = (data: {
  user1Id: number;
  user2Id: number;
}): Promise<void> => {
  const { user1Id, user2Id } = data;

  const requestConfig = {
    ...defaultRequestConfig,
    method: "POST",
    body: JSON.stringify({ user1Id, user2Id }),
  };
  console.log(data);
  return fetch("api/users", requestConfig)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Error connecting user");
    })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const userService = {
  getUsersList,
  addUser,
  connectUser,
};
