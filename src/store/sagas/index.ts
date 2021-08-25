import { all, fork } from "redux-saga/effects";
import { watchGetUsersListSaga } from "./getUsersList.sagas";

export default function* rootSaga() {
  yield all([fork(watchGetUsersListSaga)]);
}
