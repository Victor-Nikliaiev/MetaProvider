import { combineReducers } from "redux";
import { authReducers } from "./authReducers";
import { bankingReducer } from "./bankingReducers";

export const rootReducer = combineReducers({
  auth: authReducers,
  banking: bankingReducer,
});
