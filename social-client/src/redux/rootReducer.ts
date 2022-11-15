import { combineReducers } from "redux";
import UserReducer from "./user/userReducer";

const rootReducer = combineReducers({ UserReducer });

export type RooteState = ReturnType<typeof rootReducer>;

export default rootReducer;
