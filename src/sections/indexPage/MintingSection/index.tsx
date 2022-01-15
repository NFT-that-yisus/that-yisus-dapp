import React, { PureComponent } from "react";

import MintingButton from "./MintingButton"

import { connect } from "react-redux";
import { connection } from "../../../redux/actions/blockchainActions";
import { fetchData } from "../../../redux/actions/dataActions";

interface IMintingSectionProps {
    blockchain: {
        loading: boolean,
        account: null,
        smartContract: null,
        web3: null,
        errorMsg: string
    },
    data: {
        loading: false,
        totalSupply: 0,
        cost: 0,
        error: false,
        errorMsg: "",
    },
    connection: () => {},
    fetchData: () => {}
}

interface IMintingSectionState {
    CONFIG: {
        CONTRACT_ADDRESS: string,
        SCAN_LINK: string,
        NETWORK: {
            NAME: string,
            SYMBOL: string,
            ID: number
        },
        NFT_NAME: string,
        SYMBOL: string,
        MAX_SUPPLY: number,
        WEI_COST: number,
        DISPLAY_COST: number,
        GAS_LIMIT: number,
        MARKETPLACE: string,
        MARKETPLACE_LINK: string
    },
    mintAmount: number,
    isMinting: boolean,

    feedback: string
}

class MintingSection extends PureComponent<IMintingSectionProps, IMintingSectionState> {
    state = {
        CONFIG: {
            CONTRACT_ADDRESS: "",
            SCAN_LINK: "",
            NETWORK: {
                NAME: "",
                SYMBOL: "",
                ID: 0
            },
            NFT_NAME: "",
            SYMBOL: "",
            MAX_SUPPLY: 33,
            WEI_COST: 50000000000000000,
            DISPLAY_COST: 3.3,
            GAS_LIMIT: 285000,
            MARKETPLACE: "",
            MARKETPLACE_LINK: ""
        },
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
        const { CONFIG, mintAmount } = this.state;
        const { blockchain } = this.props;

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

    getCONFIG = async () => {
        const configResponse = await fetch("/config/config.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });
        const CONFIG = await configResponse.json();

        this.setState({ CONFIG });
    }

    componentDidMount() {
        this.getData();
        this.getCONFIG();
    }

    render () {
        const { CONFIG, mintAmount, isMinting, feedback } = this.state;
        const { blockchain, data } = this.props;

        const isNotConnected = blockchain.account === "" || blockchain.smartContract === null;

        return (
            <div className="py-32 px-4">
                <div className="pb-8 md:w-1/2 md:mx-auto md:p-8 text-center divide-y divide-gray-600">
                    <h2 className="bg-black text-red-400 font-heading text-4xl">
                        00h 00min 00seg restantes!
                    </h2>

                    <h3 className="py-8 text-4xl">{data.totalSupply} / {CONFIG.MAX_SUPPLY}</h3>
    
                    <div className="py-8">
                        <h4 className="text-3xl text-left pb-4">Cantidad</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="text-xl bg-purple-200 border-2 border-black hover:bg-purple-300" 
                            onClick={() => this.setMintAmount(1)}>1</button>
                            <button className="text-xl bg-purple-200 border-2 border-black hover:bg-purple-300" 
                            onClick={() => this.setMintAmount(2)}>2</button>
                        </div>
    
                        <div className="pt-4">
                            <p>{mintAmount} {CONFIG.SYMBOL} cuesta/n {CONFIG.WEI_COST * mintAmount} {CONFIG.NETWORK.SYMBOL} (00 ETH)</p>
                            <p>Excluyendo precio de gas.</p>
                        </div>
                    </div>
    
                    <div className="pt-8">
                        { isNotConnected && <p className="pb-4">Conéctate a {CONFIG.NETWORK.NAME} network</p> }

                        {feedback && <p className="pb-4">{feedback}</p>}

                        {blockchain.errorMsg && <p className="pb-4">{blockchain.errorMsg}</p>}

                        <MintingButton isNotConnected={isNotConnected} 
                        handleMintingButton={this.handleMintingButton} isMinting={isMinting} />
                    </div>
                </div>
    
                <div className="text-justify md:text-center">
                    <p>
                        Asegurate de estar conectado en la red índicada ({CONFIG.NETWORK.NAME}).
                        Una vez realizada la compra, no hay vuelta atrás.
                    </p>
                    <p>
                        Hemos puesto el límite de gas en {CONFIG.GAS_LIMIT} para un correcto minteo de tus NFTs. (Solo se utiliza el gas óptimo)
                        Recomendamos encarecidamente mantener este valor.
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    blockchain: state.blockchain,
    data: state.data    
});

const mapDispatchToProps = {
    connection,
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(MintingSection);