import { all } from "redux-saga/effects";
import UserSaga from "./user/userSaga";

export default function* rootSaga() {
  yield all([UserSaga()]);
}
