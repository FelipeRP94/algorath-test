import { AnyAction } from "redux";
import { User } from "../../model/user";

export const getUsersListActionTypes = {
  GET_USERS_LIST_REQUEST: "GET_USERS_LIST_REQUEST",
  GET_USERS_LIST_SUCCESS: "GET_USERS_LIST_SUCCESS",
};

export const getUsersListRequestAction = (): AnyAction => ({
  type: getUsersListActionTypes.GET_USERS_LIST_REQUEST,
  payload: null,
});

export const getUsersListSucessAction = (usersList: User[]): AnyAction => ({
  type: getUsersListActionTypes.GET_USERS_LIST_SUCCESS,
  payload: usersList,
});
