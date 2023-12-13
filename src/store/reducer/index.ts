import { combineReducers } from "redux";
import auth from "./auth";
import { languageReducer } from "./language";
import { pathReducer } from "./path";

export const rootReducer = combineReducers({
  auth,
  language: languageReducer,
  path: pathReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
