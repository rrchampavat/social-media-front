import {
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  registerFail,
  registerSuccess,
} from "./authActions";
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { endpoint } from "../../utils/apiEndpoints";
import { api } from "../../utils/api";
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
} from "./authActionTypes";
import Cookies from "js-cookie";

const tokenName = "accessToken";

function* Register({ payload }: any): Generator<StrictEffect, any> {
  try {
    const { data }: any = yield call(api.post, endpoint.register, payload);

    yield put(registerSuccess(data));
  } catch (error: any) {
    yield put(
      registerFail(
        error.response.data.message || "Something went wrong while registering"
      )
    );
  }
}

function* Login({ payload }: any): Generator<StrictEffect, any> {
  try {
    const { data }: any = yield call(api.post, endpoint.login, payload.data);

    Cookies.set(tokenName, data.accessToken, { path: "/" });
    yield put(loginSuccess({ data: data, callback: payload.callback }));
  } catch (error: any) {
    loginFail(
      error.response.data.message || "Something went wrong while logging in"
    );
  }
}

function* Logout(): Generator<StrictEffect, any> {
  try {
    Cookies.remove(tokenName);

    yield call(api.post, endpoint.logout);

    yield put(logoutSuccess());
  } catch (error: any) {
    yield put(logoutFail());
  }
}

function* AuthSaga() {
  yield takeLatest(REGISTER_REQUEST, Register);
  yield takeLatest(LOGIN_REQUEST, Login);
  yield takeLatest(LOGOUT_REQUEST, Logout);
}

export default AuthSaga;
