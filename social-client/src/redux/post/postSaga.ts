import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { api } from "../../utils/api";
import { endpoint } from "../../utils/apiEndpoints";
import { createPosts } from "../../utils/constants";
import {
  getPostsFail,
  getPostsSuccess,
  getUserPostsFail,
  getUserPostsSuccess,
} from "./postActions";
import { GET_POSTS_REQUEST, GET_USER_POSTS_REQUEST } from "./postActionTypes";

function* getPosts(): Generator<StrictEffect, any> {
  try {
    const { data }: any = yield call(api.get, endpoint.getPosts);
    yield put(getPostsSuccess(data));
  } catch (error: any) {
    yield put(getPostsFail(error));
  }
}

function* getUserPosts({ payload }: any): Generator<StrictEffect, any> {
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
