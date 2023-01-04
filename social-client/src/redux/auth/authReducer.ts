import { userInitialState } from "../../utils/initialStates";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_AUTH_REDUCER,
} from "./authActionTypes";
import { AUTH_STATE, authActions } from "./authTypes";

const initialState: AUTH_STATE = {
  loading: false,
  user: userInitialState,
  message: { type: null, text: null },
  accessToken: null,
};

const messageType = { success: "success", error: "error" };

const AuthReducer = (state = initialState, action: authActions) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        message: {
          type: messageType.success,
          text: action.payload.message || "Successfully logged in",
        },
        accessToken: action.payload.accessToken,
      };

    case LOGIN_FAIL:
      console.log("LOGIN FAIL", action);
      return {
        ...state,
        loading: false,
        message: { type: messageType.error, text: "Error while loggin in" },
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        message: {
          type: messageType.success,
          text: "User registered successfully",
        },
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        message: { type: messageType.error, text: action.payload },
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: initialState,
        accessToken: null,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
      };

    case RESET_AUTH_REDUCER:
      return initialState;

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
