import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./userActionTypes";

export const getUser = (data: any) => {
  return {
    type: GET_USER_REQUEST,
    payload: data,
  };
};

export const getUserSuccess = (data: any) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

export const getUserFail = (data: any) => {
  return {
    type: GET_USER_FAIL,
    payload: data,
  };
};
