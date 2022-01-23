// Action types
export const CHECK_DATA_REQUEST = "CHECK_DATA_REQUEST";
export const CHECK_DATA_SUCCESS = "CHECK_DATA_SUCCESS";
export const CHECK_DATA_FAILED = "CHECK_DATA_FAILED";

// log
import store from "../store";

// Types
interface IFetchDataSuccess {
    totalSupply: number
}

const fetchDataRequest = () => {
    return {
        type: CHECK_DATA_REQUEST
    };
};

const fetchDataSuccess = (payload:IFetchDataSuccess) => {
    return {
        type: CHECK_DATA_SUCCESS,
        payload
    };
};

const fetchDataFailed = (errorMsg:string) => {
    return {
        type: CHECK_DATA_FAILED,
        payload: { errorMsg }
    };
};

export const fetchData = () => {
    return async (dispatch:any) => { // any are you okay?
        dispatch(fetchDataRequest());

        /*const nooose = store.getState().blockchain.smartContract.methods;
                console.log(await nooose.name().call())*/

        try {
            let totalSupply = await store
                .getState()
                .blockchain.smartContract.methods.totalSupply()
                .call();
                // let cost = await store
                //   .getState()
                //   .blockchain.smartContract.methods.cost()
                //   .call();

                // console.log(store.getState().smartContract.methods.cost());
                

            dispatch(
                fetchDataSuccess({
                    totalSupply,
                    // cost
                })
            );
        } catch (err) {
            dispatch(fetchDataFailed(`No se pudo obtener la información del Smart Contract. Error: ${err}`));
        }
    };
};
