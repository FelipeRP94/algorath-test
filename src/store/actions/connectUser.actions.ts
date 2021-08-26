import { AnyAction } from "redux";

export const connectUserActionTypes = {
  CONNECT_USER_REQUEST: "CONNECT_USER_REQUEST",
};

export const connectUserAction = (
  user1Id: number,
  user2Id: number
): AnyAction => ({
  type: connectUserActionTypes.CONNECT_USER_REQUEST,
  payload: {
    user1Id,
    user2Id,
  },
});
