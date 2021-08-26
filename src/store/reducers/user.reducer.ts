import { AnyAction } from "redux";
import { createDefaultUsersState, UsersState } from "../../model/user";
import { getUsersListActionTypes } from "../actions/getUsersList.actions";

export const usersReducer = (
  state = createDefaultUsersState(),
  action: AnyAction
): UsersState => {
  const { type, payload } = action;

  switch (type) {
    case getUsersListActionTypes.GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        usersList: payload,
      };
    default:
      return state;
  }
};
