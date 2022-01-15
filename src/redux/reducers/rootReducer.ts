import blockchainReducer from "./blockchainReducer";
import dataReducer from "./dataReducer";
import CONFIGReducer from "./CONFIGReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
   blockchain: blockchainReducer,
   data: dataReducer,
   CONFIG: CONFIGReducer
});

export default rootReducer;