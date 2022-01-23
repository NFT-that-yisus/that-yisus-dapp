import IBlockchainState from "./IBlockchainState";
import IDataState from "./IDataState";
import ICONFIG from "./ICONFIG";

export default interface IMapStateToProps {
    blockchain: IBlockchainState,
    data: IDataState,
    CONFIG: ICONFIG
}