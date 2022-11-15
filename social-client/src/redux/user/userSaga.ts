import { put, takeLatest } from "redux-saga/effects";
import { getUserFail, getUserSuccess } from "./userActions";
import { GET_USER_REQUEST } from "./userActionTypes";

function* addUser({ payload }: any) {
  try {
    yield put(getUserSuccess(payload));
  } catch (error: any) {
    yield put(getUserFail(error));
  }
}

function* UserSaga() {
  yield takeLatest(GET_USER_REQUEST, addUser);
}

export default UserSaga;
