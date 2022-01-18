import { CONNECTION_REQUEST, CONNECTION_SUCCESS, CONNECTION_FAILED,
UPDATE_ACCOUNT } from "../actions/blockchainActions";

// Types
import { IBlockchainState } from "../../types";

import { Contract } from "web3-eth-contract";
import Web3 from "web3";

const initialState: IBlockchainState = {
    loading: false,
    account: null,
    smartContract: null,
    web3: null,
    errorMsg: ""
};

interface IBlockchainReducerAction {
    type: string
    payload: {
        account: string
        smartContract: Contract
        web3: Web3
        errorMsg: string
    }
}

const blockchainReducer = (state = initialState, action:IBlockchainReducerAction) => {
    switch (action.type) {
        case CONNECTION_REQUEST:
            return {
                ...initialState,
                loading: true
            };

        case CONNECTION_SUCCESS:
            const { account, smartContract, web3 } = action.payload;

            return {
                ...state,
                loading: false,
                account,
                smartContract,
                web3
            };

        case CONNECTION_FAILED:
            return {
                ...initialState,
                loading: false,
                errorMsg: action.payload.errorMsg,
            };

        case UPDATE_ACCOUNT:
            return {
                ...state,
                account: action.payload.account,
            };

        default:
            return {...state};
    }
};

export default blockchainReducer;
