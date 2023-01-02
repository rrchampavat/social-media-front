import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./userActionTypes";
import { USER } from "./userTypes";

export const getUser = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const getUserSuccess = (data: USER) => {
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
