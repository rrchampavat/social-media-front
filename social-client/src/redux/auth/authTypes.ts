import { USER } from "../user/userTypes";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_AUTH_REDUCER,
} from "./authActionTypes";

export interface LOGIN_DATA {
  userName: string;
  password: string;
}

export interface LOGIN_PAYLOAD {
  data: LOGIN_DATA;
  callback: any;
}

export interface REGISER_DATA {
  userName: string;
  fullName: string;
  password: string;
  avatar?: string;
}

export interface AUTH_STATE {
  loading: boolean;
  user: USER;
  message: object;
  accessToken: string | null;
}

export interface REGISTER_SUCCESS_PAYLOAD {
  user: REGISER_DATA;
}

export interface REGISTER_FAIL_PAYLOAD {
  error: any;
}

interface RegisterRequest {
  type: typeof REGISTER_REQUEST;
}

interface REGISTER_RESPONSE {
  message: string;
  user: USER;
  accessToken: string;
}
interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: REGISTER_RESPONSE;
}

interface RegisterFail {
  type: typeof REGISTER_FAIL;
  payload: REGISTER_FAIL_PAYLOAD;
}

export interface LOGIN_SUCCESS_PAYLOAD {
  user: LOGIN_DATA;
}

export interface LOGIN_FAIL_PAYLOAD {
  error: any;
}

interface LoginRequest {
  type: typeof LOGIN_REQUEST;
}

interface LOGIN_RESPONSE {
  message: string;
  user: USER;
  accessToken: string;
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: LOGIN_RESPONSE;
}

interface LoginFail {
  type: typeof LOGIN_FAIL;
  payload: LOGIN_FAIL_PAYLOAD;
}

interface LogoutRequest {
  type: typeof LOGOUT_REQUEST;
}

interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}

interface LogoutFail {
  type: typeof LOGOUT_FAIL;
}

interface ResetAuthReducer {
  type: typeof RESET_AUTH_REDUCER;
}

export type authActions =
  | RegisterRequest
  | RegisterFail
  | RegisterSuccess
  | LoginRequest
  | LoginSuccess
  | LoginFail
  | LogoutRequest
  | LogoutSuccess
  | LogoutFail
  | ResetAuthReducer;
