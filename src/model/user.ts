export interface User {
  id: number;
  name: string;
  connectedUsers?: User[];
}

export interface UsersState {
  usersList: User[];
}

export const createDefaultUsersState = (): UsersState => ({
  usersList: [],
});
