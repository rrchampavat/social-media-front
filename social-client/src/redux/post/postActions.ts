import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  RESET_POST_REDUCER,
} from "./postActionTypes";
import { POST } from "./postTypes";

export const getPosts = () => {
  return {
    type: GET_POSTS_REQUEST,
  };
};

export const getPostsSuccess = (data: POST[]) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: data,
  };
};

export const getPostsFail = (data: any) => {
  return {
    type: GET_POSTS_FAIL,
    paylaod: data,
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

export const resetPostReducer = () => {
  return {
    type: RESET_POST_REDUCER,
  };
};
