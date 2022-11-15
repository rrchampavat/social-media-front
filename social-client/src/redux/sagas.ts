import { all } from "redux-saga/effects";
import UserSaga from "./user/userSaga";
import PostSaga from "./post/postSaga";

export default function* rootSaga() {
  yield all([UserSaga(), PostSaga()]);
}
