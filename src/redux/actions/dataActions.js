// Action types
export const CHECK_DATA_REQUEST = "CHECK_DATA_REQUEST";
export const CHECK_DATA_SUCCESS = "CHECK_DATA_SUCCESS";
export const CHECK_DATA_FAILED = "CHECK_DATA_FAILED";

// log
import store from "../store";

const fetchDataRequest = () => {
    return {
        type: CHECK_DATA_REQUEST
    };
};

const fetchDataSuccess = payload => {
    return {
        type: CHECK_DATA_SUCCESS,
        payload
    };
};

const fetchDataFailed = payload => {
    return {
        type: CHECK_DATA_FAILED,
        payload
    };
};

export const fetchData = () => {
    return async dispatch => {
        dispatch(fetchDataRequest());

        try {
            let totalSupply = await store
                .getState()
                .blockchain.smartContract.methods.totalSupply()
                .call();
                // let cost = await store
                //   .getState()
                //   .blockchain.smartContract.methods.cost()
                //   .call();

            dispatch(
                fetchDataSuccess({
                    totalSupply,
                    // cost,
                })
            );
        } catch (err) {
            console.log(err);
            dispatch(fetchDataFailed("Could not load data from contract."));
        }
    };
};
