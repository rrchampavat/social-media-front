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
} from "./authActionTypes";
import { LOGIN_PAYLOAD, REGISER_DATA } from "./authTypes";

export const login = (data: LOGIN_PAYLOAD) => {
  return {
    type: LOGIN_REQUEST,
    payload: data,
  };
};

export const loginSuccess = (data: any) => {
  data.callback();
  return {
    type: LOGIN_SUCCESS,
    payload: data.data,
  };
};

export const loginFail = (error: any) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

export const register = (data: REGISER_DATA) => {
  return {
    type: REGISTER_REQUEST,
    payload: data,
  };
};

export const registerSuccess = (data: any) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

export const registerFail = (error: any) => {
  return {
    type: REGISTER_FAIL,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
export const logoutFail = () => {
  return {
    type: LOGOUT_FAIL,
  };
};
