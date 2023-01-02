import { combineReducers } from "redux";
import UserReducer from "./user/userReducer";
import PostReducer from "./post/postReducer";
import AuthReducer from "./auth/authReducer";

const rootReducer = combineReducers({ PostReducer, AuthReducer, UserReducer });

export type RooteState = ReturnType<typeof rootReducer>;

export default rootReducer;
