import { AnyAction } from "redux";

export const addUserActionTypes = {
  ADD_USER_REQUEST: "ADD_USER_REQUEST",
  ADD_USER_SUCCESS: "ADD_USER_SUCESS",
  ADD_USER_ERROR: "ADD_USER_ERROR",
};

export const addUserRequestAction = (name: string): AnyAction => ({
  type: addUserActionTypes.ADD_USER_REQUEST,
  payload: name,
});

export const addUserErrorAction = (error: string): AnyAction => ({
  type: addUserActionTypes.ADD_USER_ERROR,
  payload: error,
});
