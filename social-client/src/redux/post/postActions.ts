import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "./postActionTypes";
import { POST } from "./postTypes";

export const getPosts = (data: number) => {
  return {
    type: GET_POSTS_REQUEST,
    payload: data,
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
