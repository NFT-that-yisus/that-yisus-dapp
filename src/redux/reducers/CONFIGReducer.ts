import { ICONFIG } from "../../types";

const initialState: ICONFIG = {
    "CONTRACT_ADDRESS": "0x38763358f01db1b064db61c56c05b66047380d84",
    "SCAN_LINK": "https://mumbai.polygonscan.com/address/0x38763358f01db1B064dB61C56c05b66047380d84",
    "NETWORK": {
        "NAME": "Mumbai Polygon Testnet",
        "SYMBOL": "Matic",
        "ID": 80001
    },
    "NFT_NAME": "That Yisus Exclusive Limited Collection",
    "SYMBOL": "TYELC",
    "MAX_SUPPLY": 33,
    "WEI_COST": 50000000000000000,
    "DISPLAY_COST": 3.3,
    "GAS_LIMIT": 285000,
    "MARKETPLACE": "Opeansea",
    "MARKETPLACE_LINK": "https://testnets.opensea.io/collection/that-yisus-exclusive-limited-collection"
}

interface ICONFIGReducerAction {
    type: string
}
  
const CONFIGReducer = (state = initialState, action: ICONFIGReducerAction) => {
    switch (action.type) {
        default:
            return {...state};
    }
};
  
export default CONFIGReducer;
