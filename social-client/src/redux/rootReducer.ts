import { combineReducers } from "redux";
import UserReducer from "./user/userReducer";
import PostReducer from "./post/postReducer";

const rootReducer = combineReducers({ UserReducer, PostReducer });

export type RooteState = ReturnType<typeof rootReducer>;

export default rootReducer;
