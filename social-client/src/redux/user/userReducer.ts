import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./userActionTypes";
import { USER_STATE, userActions } from "./userTypes";

const initialState: USER_STATE = {
  loading: false,
  user: {},
  users: [],
  message: { type: null, text: null },
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

const UserReducer = (state = initialState, action: userActions) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        message: { type: "loading", message: "data is loading" },
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        message: { type: "success", text: "Profile get success !" },
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
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
