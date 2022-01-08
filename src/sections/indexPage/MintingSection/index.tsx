import React, { Fragment, useEffect, useState } from "react";

//import MintingButton from "./MintingButton";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../../redux/blockchain/blockchainActions";
import { fetchData } from "../../../redux/data/dataActions";

const App = () => {
    const dispatch = useDispatch();

    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);

    const [isMinting, setIsMinting] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: "",
        SCAN_LINK: "",
        NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
        },
        NFT_NAME: "",
        SYMBOL: "",
        MAX_SUPPLY: 1,
        WEI_COST: 0,
        DISPLAY_COST: 0,
        GAS_LIMIT: 0,
        MARKETPLACE: "",
        MARKETPLACE_LINK: ""
    });

    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setIsMinting(true);
        console.log(blockchain)

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
            setFeedback("Sorry, something went wrong please try again later.");
            setIsMinting(false);
        })
        .then((receipt) => {
            console.log(receipt);
            setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
            );
            setIsMinting(false);
            dispatch(fetchData(blockchain.account));
        });
    };


    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
        }
    };

    const getConfig = async () => {
        const configResponse = await fetch("/config/config.json", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        });
        const config = await configResponse.json();
        SET_CONFIG(config);
    };

    const isNotConnected = blockchain.account === "" || blockchain.smartContract === null;

    const buttonOnClick = () => {
        if(isNotConnected) {
            dispatch(connect()); 
            getData();
        } else {
            claimNFTs();
            getData();
        }
    }

    useEffect(() => {
        getConfig();
    }, []);

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    return (
        <div className="bg-blue-300 py-16 px-4">
            {feedback && <p>{feedback}</p>}

            {blockchain.errorMsg !== "" ? 
                        (
                            <>
                                <p
                                style={{
                                    textAlign: "center",
                                    color: "var(--accent-text)",
                                }}
                                >
                                {blockchain.errorMsg}
                                </p>
                            </>
                        ) 
                        : null}

            <div className="w-1/2 mx-auto p-8 bg-white text-center divide-y divide-gray-600">
                <h3 className="pb-8 text-4xl">{data.totalSupply} / {CONFIG.MAX_SUPPLY}</h3>

                <div className="py-8">
                    <h4 className="text-3xl text-left pb-4">Cantidad</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="border-2 border-black" onClick={() => setMintAmount(1)}>1</button>
                        <button className="border-2 border-black" onClick={() => setMintAmount(2)}>2</button>
                    </div>

                    <div className="pt-4">
                        <p>{mintAmount} {CONFIG.SYMBOL} cuesta/n {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL} (00 ETH)</p>
                        <p>Excluyendo precio de gas.</p>
                    </div>
                </div>

                <div className="pt-8">
                    {/*<MintingButton blockchain={blockchain} CONFIG={CONFIG} isMinting={isMinting}/>*/}

                    { isNotConnected && <p>Conéctate a {CONFIG.NETWORK.NAME} network</p> }

                    <button onClick={buttonOnClick} disabled={isMinting} className="px-8 py-4 bg-black text-white">
                        {
                            isNotConnected ?
                                "CONECTAR"
                            :
                                isMinting ? "PROCESANDO" : "MINTING"
                        }
                    </button>
                </div>
            </div>

            <div>
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

export default App;

/*const MintingButton = (blockchain: {}, CONFIG: {}, isMinting:boolean) => {
    const isNotConnected = blockchain.account === "" || blockchain.smartContract === null;

    const buttonOnClick = () => {
        if(isNotConnected) {
            dispatch(connect()); 
            getData();
        } else {
            claimNFTs();
            getData();
        }
    }

    return (
        <Fragment>
            { isNotConnected && <p>Conéctate a {CONFIG.NETWORK.NAME} network</p> }

            <button onClick={buttonOnClick} disabled={isMinting} className="px-8 py-4 bg-black text-white">
                {
                    isNotConnected ?
                        "CONECTAR"
                    :
                        isMinting ? "PROCESANDO" : "MINTING"
                }
            </button>
        </Fragment>
    );
}*/








/*



export default class extends PureComponent {
    state = {
        mintAmount: 1
    };

    setMintAmount = (mintAmount:number) => this.setState({ mintAmount });

    render () {
        const { mintAmount } = this.state;

        
}

export async function getStaticProps() {
    // Getting config from config.json file in /public directory
    const configResponse = await fetch("config/config.json", 
    {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    });

    return {
        props: {
            config: await configResponse.json()
        }
    }
}*/