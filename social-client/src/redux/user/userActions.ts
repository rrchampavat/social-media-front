import { POST } from "../post/postTypes";
import {
  GET_USER_FAIL,
  GET_USER_POSTS_FAIL,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
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

export const getUserPosts = (data: number) => {
  return {
    type: GET_USER_POSTS_REQUEST,
    payload: data,
  };
};

export const getUserPostsSuccess = (data: POST[]) => {
  return {
    type: GET_USER_POSTS_SUCCESS,
    payload: data,
  };
};

export const getUserPostsFail = (data: any) => {
  return {
    type: GET_USER_POSTS_FAIL,
    payload: data,
  };
};
