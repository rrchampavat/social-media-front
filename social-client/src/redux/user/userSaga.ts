import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { api } from "../../utils/api";
import { endpoint } from "../../utils/apiEndpoints";
import { createUser } from "../../utils/constants";
import {
  getProfileFail,
  getProfileSuccess,
  getUserFail,
  getUserSuccess,
} from "./userActions";
import { GET_PROFILE_REQUEST, GET_USER_REQUEST } from "./userActionTypes";

function* getUser() {
  try {
    const user = createUser();
    yield put(getUserSuccess(user));
  } catch (error: any) {
    yield put(getUserFail(error));
  }
}

function* getProfile(): Generator<StrictEffect, any> {
  try {
    const { data }: any = yield call(api.get, endpoint.getProfile);

    yield put(getProfileSuccess(data));
  } catch (error: any) {
    yield put(getProfileFail(error.message));
  }
}

function* UserSaga() {
  yield takeLatest(GET_USER_REQUEST, getUser);
  yield takeLatest(GET_PROFILE_REQUEST, getProfile);
}

export default UserSaga;
