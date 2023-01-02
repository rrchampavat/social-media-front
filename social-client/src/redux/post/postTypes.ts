import { COMMENT } from "../../utils/constants";
import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
} from "./postActionTypes";

export interface POST {
  postID: string;
  userName: string;
  image: string;
  caption: string;
  comments: COMMENT[];
  userAvatar: string;
  likeCount: number;
  isLiked: boolean;
  location: string;
  created_at: Date;
}

export interface POST_STATE {
  loading: boolean;
  post: object;
  posts: POST[];
  message: object;
}

export interface GET_POSTS_SUCCESS_PAYLOAD {
  posts: POST[];
}

export interface GET_POSTS_FAIL_PAYLOAD {
  error: any;
}

export interface GetPostsRequest {
  type: typeof GET_POSTS_REQUEST;
}

export interface GetPostsSuccess {
  type: typeof GET_POSTS_SUCCESS;
  payload: GET_POSTS_SUCCESS_PAYLOAD;
}

export interface GetPostsFail {
  type: typeof GET_POSTS_FAIL;
  payload: GET_POSTS_FAIL_PAYLOAD;
}

interface GET_USER_POSTS_SUCCESS_PAYLOAD {
  posts: POST[];
}

interface GET_USER_POSTS_FAIL_PAYLOAD {
  error: any;
}

interface GetUserPostsRequest {
  type: typeof GET_USER_POSTS_REQUEST;
}

interface GetUserPostsSuccess {
  type: typeof GET_USER_POSTS_SUCCESS;
  payload: GET_USER_POSTS_SUCCESS_PAYLOAD;
}

interface GetUserPostsFail {
  type: typeof GET_USER_POSTS_FAIL;
  payload: GET_USER_POSTS_FAIL_PAYLOAD;
}

export type postActions =
  | GetPostsRequest
  | GetPostsSuccess
  | GetPostsFail
  | GetUserPostsRequest
  | GetUserPostsSuccess
  | GetUserPostsFail;
