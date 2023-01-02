import { put, takeLatest } from "redux-saga/effects";
import { createUser } from "../../utils/constants";
import { getUserFail, getUserSuccess } from "./userActions";
import { GET_USER_REQUEST } from "./userActionTypes";

function* getUser() {
  try {
    const user = createUser();
    yield put(getUserSuccess(user));
  } catch (error: any) {
    yield put(getUserFail(error));
  }
}

function* UserSaga() {
  yield takeLatest(GET_USER_REQUEST, getUser);
}

export default UserSaga;
