import { Contract } from "web3-eth-contract";
import Web3 from "web3";

export default interface IBlockchainState {
    loading: boolean,
    account: string | null,
    smartContract: Contract | null,
    web3: Web3 | null,
    errorMsg: string
}