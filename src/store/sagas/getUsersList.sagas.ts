import { call, put, takeEvery } from "redux-saga/effects";
import { User } from "../../model/user";
import { userService } from "../../services/user.services";
import {
  getUsersListActionTypes,
  getUsersListErrorAction,
  getUsersListSucessAction,
} from "../actions/getUsersList.actions";

export function* getUsersListSaga() {
  try {
    const usersList: User[] = yield call(userService.getUsersList);

    yield put(getUsersListSucessAction(usersList));
  } catch (error) {
    yield put(getUsersListErrorAction(error.message));
  }
}

export function* watchGetUsersListSaga() {
  yield takeEvery(
    getUsersListActionTypes.GET_USERS_LIST_REQUEST,
    getUsersListSaga
  );
}
