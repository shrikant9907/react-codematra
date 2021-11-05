import { combineReducers } from "redux";
import { blogReducer } from "./blogReducers";

export const rootReducer = combineReducers([
  blogReducer
]);   