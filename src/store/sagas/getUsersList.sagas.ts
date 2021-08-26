import { call, put, takeEvery } from "redux-saga/effects";
import {
  getUsersListActionTypes,
  getUsersListSucessAction,
} from "../actions/getUsersList.actions";
import { User } from "../../model/user";
import { userService } from "../../services/user.services";
import toast from "react-hot-toast";

export function* getUsersListSaga() {
  try {
    const usersList: User[] = yield call(userService.getUsersList);

    yield put(getUsersListSucessAction(usersList));
  } catch (error) {
    toast.error(error.message);
  }
}

export function* watchGetUsersListSaga() {
  yield takeEvery(
    getUsersListActionTypes.GET_USERS_LIST_REQUEST,
    getUsersListSaga
  );
}
