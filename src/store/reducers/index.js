import { combineReducers } from "redux";
import userReducer from "./user.reducers";
import walletReducer from "./wallet.reducers";
import transactionsReducer from "./transactions.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
