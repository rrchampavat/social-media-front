import { COMMENT } from "../../utils/constants";
import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  RESET_POST_REDUCER,
} from "./postActionTypes";

export interface POST {
  postID: string;
  user: string;
  imageURL: string;
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

interface SUCCESS_PAYLOAD {
  data: POST[];
  message: string;
}

interface FAIL_PAYLOAD {
  error: any;
}

interface GetPostsRequest {
  type: typeof GET_POSTS_REQUEST;
}

interface GetPostsSuccess {
  type: typeof GET_POSTS_SUCCESS;
  payload: SUCCESS_PAYLOAD;
}

interface GetPostsFail {
  type: typeof GET_POSTS_FAIL;
  payload: FAIL_PAYLOAD;
}

interface GetUserPostsRequest {
  type: typeof GET_USER_POSTS_REQUEST;
}

interface GetUserPostsSuccess {
  type: typeof GET_USER_POSTS_SUCCESS;
  payload: SUCCESS_PAYLOAD;
}

interface GetUserPostsFail {
  type: typeof GET_USER_POSTS_FAIL;
  payload: FAIL_PAYLOAD;
}

interface ResetPostReducer {
  type: typeof RESET_POST_REDUCER;
}

export type postActions =
  | GetPostsRequest
  | GetPostsSuccess
  | GetPostsFail
  | GetUserPostsRequest
  | GetUserPostsSuccess
  | GetUserPostsFail
  | ResetPostReducer;
