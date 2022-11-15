import { put, takeLatest } from "redux-saga/effects";
import { createPosts } from "../../utils/constants";
import { getPostsFail, getPostsSuccess } from "./postActions";
import { GET_POSTS_REQUEST } from "./postActionTypes";

function* getPosts({ payload }: any) {
  try {
    const posts = createPosts(payload);
    yield put(getPostsSuccess(posts));
  } catch (error: any) {
    yield put(getPostsFail(error));
  }
}

function* PostSaga() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
}

export default PostSaga;
