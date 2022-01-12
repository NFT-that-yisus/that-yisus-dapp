import React, { PureComponent } from "react";

import MintingButton from "./MintingButton"

import { connect } from "react-redux";
import { connection } from "../../../redux/actions/blockchainActions";
import { fetchData } from "../../../redux/actions/dataActions";

interface IMintingSectionProps {
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
    blockchain: {
        loading: false,
        account: null,
        smartContract: null,
        web3: null,
        errorMsg: ""
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
}

class MintingSection extends PureComponent<IMintingSectionProps, IMintingSectionState> {
    state = {
        mintAmount: 1,
        isMinting: false,

        feedback: ""
    }

    mintNFT = () => {
        /*const { CONFIG, blockchain } = this.props;
        const { mintAmount } = this.state;

        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);

        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);

        this.setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
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
            this.setFeedback("Sorry, something went wrong please try again later.");
            this.setIsMinting(false);
        })
        .then((receipt) => {
            console.log(receipt);
            this.setFeedback(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`);
            this.setIsMinting(false);
            fetchData(/*blockchain.account--------------);
        });*/
    };

    getData = () => {
        const { blockchain, fetchData } = this.props;

        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            fetchData(/*blockchain.account*/);
        }
    };

    setMintAmount = (mintAmount:number) => this.setState({ mintAmount });

    setIsMinting = (value:boolean) => this.setState({ isMinting: value });

    setFeedback = (feedback:string) => this.setState({ feedback });

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

    render () {
        const { mintAmount, isMinting, feedback } = this.state;
        const { CONFIG, blockchain, data } = this.props;

        const isNotConnected = blockchain.account === "" || blockchain.smartContract === null;

        return (
            <div className="py-32 px-4">
                {feedback && <p>{feedback}</p>}

                {blockchain.errorMsg && <p>{blockchain.errorMsg}</p>}
    
                <div className="w-1/2 mx-auto p-8 text-center divide-y divide-gray-600">
                    <h3 className="bg-black text-red-400 font-heading text-2xl">
                        00h 00min 00seg restantes!.
                    </h3>

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
                            <p>{mintAmount} {CONFIG.SYMBOL} cuesta/n {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL} (00 ETH)</p>
                            <p>Excluyendo precio de gas.</p>
                        </div>
                    </div>
    
                    <div className="pt-8">
                        <MintingButton isNotConnected={isNotConnected} CONFIG={CONFIG} 
                        handleMintingButton={this.handleMintingButton} isMinting={isMinting} />
                    </div>
                </div>
    
                <div className="text-center">
                    <p>
                        Asegurate de estar conectado en la red índicada ({CONFIG.NETWORK.NAME}).
                        Una vez realizada la compra, no hay vuelta atrás.
                    </p>
                    <p>
                        Hemos puesto el limite de gas en {CONFIG.GAS_LIMIT} para un correcto minteo de tus NFTs.
                        Recomendamos encarecidamente mantener este valor.
                    </p>
                </div>
            </div>
        );
    }
}

export async function getStaticProps() {
    const configResponse = await fetch("/config/config.json", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    });
    const config = await configResponse.json();

    return {
        props: {
            CONFIG: config
        }
    }
}

const mapStateToProps = state => ({
    blockchain: state.blockchain,
    data: state.data,

    // TESTING ONLY
    CONFIG: {
        "CONTRACT_ADDRESS": "0x38763358f01db1B064dB61C56c05b66047380d84",
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
});

const mapDispatchToProps = {
    connection: connection,
    fetchData: fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(MintingSection);


/*;

const App = () => {

    useEffect(() => {
        getConfig();
    }, []);

    useEffect(() => {
        getData();
    }, [blockchain.account]);

}
*/