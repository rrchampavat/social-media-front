import { POST } from "../post/postTypes";
import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
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

export type userActions = GetUserRequest | GetUserSuccess | GetUserFail;
