import { AnyAction } from "redux";
import { User } from "../../model/user";

export const getUsersListActionTypes = {
  GET_USERS_LIST_REQUEST: "GET_USERS_LIST_REQUEST",
  GET_USERS_LIST_SUCCESS: "GET_USERS_LIST_SUCCESS",
  GET_USERS_LIST_ERROR: "GET_USERS_LIST_ERROR",
};

export const getUsersListRequestAction = (): AnyAction => ({
  type: getUsersListActionTypes.GET_USERS_LIST_REQUEST,
  payload: null,
});

export const getUsersListSucessAction = (usersList: User[]): AnyAction => ({
  type: getUsersListActionTypes.GET_USERS_LIST_SUCCESS,
  payload: usersList,
});

export const getUsersListErrorAction = (error: string): AnyAction => ({
  type: getUsersListActionTypes.GET_USERS_LIST_ERROR,
  payload: error,
});
