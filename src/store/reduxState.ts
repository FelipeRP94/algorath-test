import { createDefaultUsersState, UsersState } from "../model/user";

export interface ReduxState {
  usersState: UsersState;
}

export const createDefaultReduxState = (): ReduxState => ({
  usersState: createDefaultUsersState(),
});
