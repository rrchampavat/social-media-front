import { POST } from "../post/postTypes";
import {
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  RESET_USER_REDUCER,
} from "./userActionTypes";

export interface USER {
  userId?: string;
  userName: string;
  avatar: string;
  fullName: string;
  postCount: number;
  followerCount: number;
  followingCount: number;
  bio: string;
}

export interface USER_STATE {
  loading: boolean;
  user: object;
  users: Array<USER> | [];
  message: object;
  posts: POST[];
}

export interface GET_USER_SUCCESS_PAYLOAD {
  user: USER;
}

export interface GET_USER_FAIL_PAYLOAD {
  error: any;
}

export interface GetUserRequest {
  type: typeof GET_USER_REQUEST;
}

export interface GetUserSuccess {
  type: typeof GET_USER_SUCCESS;
  payload: GET_USER_SUCCESS_PAYLOAD;
}

export interface GetUserFail {
  type: typeof GET_USER_FAIL;
  payload: GET_USER_FAIL_PAYLOAD;
}

interface GET_PROFILE_SUCCESS_PAYLOAD {
  data: USER;
  message: string;
}

export interface GET_PROFILE_FAIL_PAYLOAD {
  error: any;
}

export interface GetProfileRequest {
  type: typeof GET_PROFILE_REQUEST;
}

export interface GetProfileSuccess {
  type: typeof GET_PROFILE_SUCCESS;
  payload: GET_PROFILE_SUCCESS_PAYLOAD;
}

export interface GetProfileFail {
  type: typeof GET_PROFILE_FAIL;
  payload: GET_PROFILE_FAIL_PAYLOAD;
}

interface resetUserReducer {
  type: typeof RESET_USER_REDUCER;
}

export type userActions =
  | GetUserRequest
  | GetUserSuccess
  | GetUserFail
  | GetProfileRequest
  | GetProfileSuccess
  | GetProfileFail
  | resetUserReducer;
