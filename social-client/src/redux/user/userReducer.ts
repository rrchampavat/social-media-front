import {
  GET_USER_FAIL,
  GET_USER_POSTS_FAIL,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./userActionTypes";
import { USER_STATE, userActions } from "./userTypes";

const initialState: USER_STATE = {
  loading: false,
  user: {},
  users: [],
  message: { type: null, text: null },
  posts: [],
};

// export const user = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     getUserData: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });

const messageType = { success: "success", error: "error" };

const UserReducer = (state = initialState, action: userActions) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        message: { type: messageType.success, text: "Profile get success !" },
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        message: {
          type: messageType.error,
          text: "Error while getting user details !",
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

    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;

// export const { getUserData } = user.actions;

// export default user.reducer;
