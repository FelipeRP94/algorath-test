import { addUserActionTypes } from "../actions/addUser.actions";
import { AnyAction } from "redux";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { userService } from "../../services/user.services";
import { getUsersListRequestAction } from "../actions/getUsersList.actions";
import toast from "react-hot-toast";

export function* addUserSaga(action: AnyAction) {
  try {
    yield call(userService.addUser, action.payload);
    toast.success("User created");
    yield put(getUsersListRequestAction());
  } catch (error) {
    toast.error("Error creating user");
  }
}

export function* watchAddUserSaga() {
  yield takeEvery(addUserActionTypes.ADD_USER_REQUEST, addUserSaga);
}
