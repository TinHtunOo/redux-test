import { combineReducers, createStore } from "redux";
import accountReducer from "./feature/accounts/accountSlices";
import customerReducer from "./feature/customers/customerSlices";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
