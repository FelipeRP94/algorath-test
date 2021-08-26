import { AnyAction } from "redux";

export const addUserActionTypes = {
  ADD_USER_REQUEST: "ADD_USER_REQUEST",
};

export const addUserRequestAction = (name: string): AnyAction => ({
  type: addUserActionTypes.ADD_USER_REQUEST,
  payload: name,
});
