import { all } from "redux-saga/effects";
import UserSaga from "./user/userSaga";
import PostSaga from "./post/postSaga";
import AuthSaga from "./auth/authSaga";

export default function* rootSaga() {
  yield all([UserSaga(), PostSaga(), AuthSaga()]);
}
