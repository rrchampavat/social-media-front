import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  RESET_POST_REDUCER,
} from "./postActionTypes";
import { POST_STATE, postActions } from "./postTypes";

const initialState: POST_STATE = {
  loading: false,
  post: {},
  posts: [],
  message: { type: null, text: null },
};

const messageType = { success: "success", error: "error" };

const PostReducer = (state = initialState, action: postActions) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.data,
        message: {
          type: messageType.success,
          text: action.payload.data,
        },
      };

    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        message: {
          type: messageType.error,
          text: "Error while fetching posts",
        },
      };
    case GET_USER_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        message: {
          type: messageType.success,
          text: "User posts fetched successfully !",
        },
      };

    case GET_USER_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        message: {
          type: messageType.error,
          text: "Error while fetching user posts !",
        },
      };

    case RESET_POST_REDUCER:
      return initialState;

    default:
      return {
        ...state,
      };
  }
};

export default PostReducer;
