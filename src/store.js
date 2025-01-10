import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./feature/accounts/accountSlices";
import customerReducer from "./feature/customers/customerSlices";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
