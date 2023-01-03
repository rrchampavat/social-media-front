import {
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
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

export const getProfile = () => {
  return {
    type: GET_PROFILE_REQUEST,
  };
};

export const getProfileSuccess = (data: USER) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: data,
  };
};

export const getProfileFail = (data: any) => {
  return {
    type: GET_PROFILE_FAIL,
    payload: data,
  };
};
