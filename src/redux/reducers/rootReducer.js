import blockchainReducer from "./blockchainReducer";
import dataReducer from "./dataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   blockchain: blockchainReducer,
   data: dataReducer
});

export default rootReducer;