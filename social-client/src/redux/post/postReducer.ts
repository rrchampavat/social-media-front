import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
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
        posts: action.payload,
        message: {
          type: messageType.success,
          text: "Fetched posts successfully",
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

    default:
      return {
        ...state,
      };
  }
};

export default PostReducer;
