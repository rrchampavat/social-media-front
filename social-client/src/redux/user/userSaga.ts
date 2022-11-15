import { put, takeLatest } from "redux-saga/effects";
import { createPosts, createUser } from "../../utils/constants";
import {
  getUserFail,
  getUserPostsFail,
  getUserPostsSuccess,
  getUserSuccess,
} from "./userActions";
import { GET_USER_POSTS_REQUEST, GET_USER_REQUEST } from "./userActionTypes";

function* getUser() {
  try {
    const user = createUser();
    yield put(getUserSuccess(user));
  } catch (error: any) {
    yield put(getUserFail(error));
  }
}

function* getUserPosts({ payload }: any) {
  try {
    const posts = createPosts(payload);
    yield put(getUserPostsSuccess(posts));
  } catch (error: any) {
    yield put(getUserPostsFail(error));
  }
}

function* UserSaga() {
  yield takeLatest(GET_USER_REQUEST, getUser);
  yield takeLatest(GET_USER_POSTS_REQUEST, getUserPosts);
}

export default UserSaga;
