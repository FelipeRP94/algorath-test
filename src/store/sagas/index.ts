import { all, fork } from "redux-saga/effects";
import { watchAddUserSaga } from "./addUser.sagas";
import { watchGetUsersListSaga } from "./getUsersList.sagas";

export default function* rootSaga() {
  yield all([fork(watchGetUsersListSaga), fork(watchAddUserSaga)]);
}
