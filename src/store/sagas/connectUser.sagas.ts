import { AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { connectUserActionTypes } from "../actions/connectUser.actions";
import { getUsersListRequestAction } from "../actions/getUsersList.actions";
import { userService } from "../../services/user.services";
import toast from "react-hot-toast";

export function* connectUserSaga(action: AnyAction) {
  try {
    yield call(userService.connectUser, action.payload);
    toast.success("User connected");
    yield put(getUsersListRequestAction());
  } catch (error) {
    toast.error(error.message);
  }
}

export function* watchConnectUserSaga() {
  yield takeEvery(connectUserActionTypes.CONNECT_USER_REQUEST, connectUserSaga);
}
