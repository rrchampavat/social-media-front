import { put, takeLatest } from "redux-saga/effects";
import { createPosts } from "../../utils/constants";
import {
  getPostsFail,
  getPostsSuccess,
  getUserPostsFail,
  getUserPostsSuccess,
} from "./postActions";
import { GET_POSTS_REQUEST, GET_USER_POSTS_REQUEST } from "./postActionTypes";

function* getPosts({ payload }: any) {
  try {
    const posts = createPosts(payload);
    yield put(getPostsSuccess(posts));
  } catch (error: any) {
    yield put(getPostsFail(error));
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

function* PostSaga() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
  yield takeLatest(GET_USER_POSTS_REQUEST, getUserPosts);
}

export default PostSaga;
