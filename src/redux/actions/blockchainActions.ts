// Action types
export const CONNECTION_REQUEST = "CONNECTION_REQUEST";
export const CONNECTION_SUCCESS = "CONNECTION_SUCCESS";
export const CONNECTION_FAILED = "CONNECTION_FAILED";
export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";

// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";

// log
import { fetchData } from "./dataActions";

const connectionRequest = () => {
    return {
        type: CONNECTION_REQUEST
    };
};

const connectionSuccess = payload => {
    return {
        type: CONNECTION_SUCCESS,
        payload
    };
};

const connectionFailed = payload => {
    return {
        type: CONNECTION_FAILED,
        payload
    };
};

const updateAccountRequest = payload => {
    return {
        type: UPDATE_ACCOUNT,
        payload
    };
};

export const connection = () => {
    return async dispatch => {
        dispatch(connectionRequest());

        const abiResponse = await fetch("/config/abi.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });
        const abi = await abiResponse.json();

        const configResponse = await fetch("/config/config.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });
        const CONFIG = await configResponse.json();

        const { ethereum } = window;
        const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

        if (metamaskIsInstalled) {
            Web3EthContract.setProvider(ethereum);
            let web3 = new Web3(ethereum);

            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });

                const networkId = await ethereum.request({
                    method: "net_version",
                });

                if (networkId == CONFIG.NETWORK.ID) {
                    const SmartContractObj = new Web3EthContract(
                        abi,
                        CONFIG.CONTRACT_ADDRESS
                    );

                    dispatch(
                        connectionSuccess({
                            account: accounts[0],
                            smartContract: SmartContractObj,
                            web3: web3
                        })
                    );
                    // Add listeners start
                    ethereum.on("accountsChanged", (accounts) => {
                        dispatch(updateAccount(accounts[0]));
                    });
                    ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });
                    // Add listeners end
                } else {
                    dispatch(connectionFailed(`Cambia a ${CONFIG.NETWORK.NAME} network.`));
                }
            } catch (err) {
                dispatch(connectionFailed(`Ocurrió un error: ${err}`));
            }
        } else {
            dispatch(connectionFailed("Installa Metamask."));
        }
    };
};

export const updateAccount = account => {
    return async dispatch => {
        dispatch(updateAccountRequest({ account }));
        dispatch(fetchData(account));
    };
};
