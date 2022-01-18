import React, { PureComponent } from "react";

import MintingSection from "./MintingSection";

import { connect } from "react-redux";
import { connection } from "../../../redux/actions/blockchainActions";
import { fetchData } from "../../../redux/actions/dataActions";

import { ICONFIG, IBlockchainState, IDataState, IMapStateToProps } from "../../../types";

interface IMintingSectionHandlerProps {
    CONFIG: ICONFIG,
    blockchain: IBlockchainState,
    data: IDataState,
    connection: () => {},
    fetchData: () => {}
}

class MintingSectionHandler extends PureComponent<IMintingSectionHandlerProps> {
    state = {
        mintAmount: 1,
        isMinting: false,

        feedback: ""
    }

    getData = () => {
        const { blockchain, fetchData } = this.props;

        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            fetchData(/*blockchain.account*/);
        }
    };

    setMintAmount = (mintAmount:number) => this.setState({ mintAmount });

    setIsMinting = (isMinting:boolean) => this.setState({ isMinting });

    setFeedback = (feedback:string) => this.setState({ feedback });

    mintNFT = () => {
        const { mintAmount } = this.state;
        const { blockchain, CONFIG } = this.props;

        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);

        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);

        this.setFeedback(`Minteando ${mintAmount} ${CONFIG.NFT_NAME}`);
        this.setIsMinting(true);

        blockchain.smartContract.methods
        //.mint(blockchain.account, mintAmount) This is for 2 arguments when minting
        .mint(mintAmount)
        .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: totalCostWei,
        })
        .once("error", (err) => {
            console.log(err);
            this.setFeedback("Ocurrió un error. Ve a console.log para saber más.");
            this.setIsMinting(false);
        })
        .then((receipt) => {
            console.log(receipt);
            this.setFeedback(`Acabas de mintear ${mintAmount} ${CONFIG.NFT_NAME} felicidades! Ve a Opensea para verlo.`);
            this.setIsMinting(false);
            fetchData(/*blockchain.account*/);
        });
    };

    handleMintingButton = () => {
        const { blockchain, connection } = this.props;
        const isNotConnected = blockchain.account === "" || blockchain.smartContract === null;

        if(isNotConnected) {
            connection(); 
            this.getData();
        } else {
            this.mintNFT();
            this.getData();
        }
    }

    componentDidMount() {
        this.getData();
    }

    render () {
        const { mintAmount, isMinting, feedback } = this.state;
        const { blockchain, data, CONFIG } = this.props;

        const isNotConnected = blockchain.account === "" || blockchain.smartContract === null;

        return <MintingSection data={data} CONFIG={CONFIG} setMintAmount={this.setMintAmount} 
        mintAmount={mintAmount} isNotConnected={isNotConnected} feedback={feedback} 
        blockchain={blockchain} handleMintingButton={this.handleMintingButton} isMinting={isMinting} />
    }
}

const mapStateToProps = (state: IMapStateToProps) => ({
    blockchain: state.blockchain,
    data: state.data,
    CONFIG: state.CONFIG    
});

const mapDispatchToProps = {
    connection,
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(MintingSectionHandler);