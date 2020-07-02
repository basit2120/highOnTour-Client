import { combineReducers } from "redux";

// Import custom components
import authReducer from "./auth";

const rootReducer = combineReducers({
  authReducer: authReducer,
});

export default rootReducer;
