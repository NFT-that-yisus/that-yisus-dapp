import { CHECK_DATA_REQUEST, CHECK_DATA_SUCCESS, CHECK_DATA_FAILED } from "../actions/dataActions";

import { IDataState } from "../../types";

const initialState: IDataState = {
    loading: false,
    totalSupply: 0,
    cost: 0,
    errorMsg: ""
};

interface IDataReducerAction {
    type: string,
    payload: {
        totalSupply: number,
        errorMsg: string
    }
}
  
const dataReducer = (state = initialState, action: IDataReducerAction) => {
    switch (action.type) {
        case CHECK_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };

        case CHECK_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                totalSupply: action.payload.totalSupply,
                // cost: action.payload.cost
            };

        case CHECK_DATA_FAILED:
            return {
                ...initialState,
                loading: false,
                errorMsg: action.payload.errorMsg,
            };

        default:
            return {...state};
    }
};
  
export default dataReducer;
  