import React from "react";



/*
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
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
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    console.log(blockchain)

    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      //.mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
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

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div style={{ background: "orange" }}>
      <div>


        <a href={CONFIG.MARKETPLACE_LINK}></a>


        <div>
          <div>
            
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? <h1>finished</h1>
             : (
              <>
                

                
          </div>
        </div>



      </div>
    </div>
  );
}
*/


 /*? 
    
    : 
    (
         <>
            <p>{feedback}</p>
            
            <div style={{ textAlign: "center" }}>
                <h3>{mintAmount} costs ${mintAmount * CONFIG.WEI_COST} MATIC ($AMOUNT ETH)</h3>
            </div>         
        </>
    )

    */







const CONFIG = {
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "Polygon",
      SYMBOL: "MATIC",
      ID: 0,
    },
    NFT_NAME: "That Yisus Exclusive Limited Collection",
    SYMBOL: "TYELC",
    MAX_SUPPLY: 33,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
}

const blockchain = {
    account: "",
    smartContract: null,

    errorMsg: ""
};

const data = {
    totalSupply: 0
};

const mintAmount = 1;
const setMintAmount = () => {}

const claimingNft = 1;

const MintingButton = () => {
    return (
        blockchain.account === "" || blockchain.smartContract === null ? 
        (
            <div>
                    <p>Connect to the {CONFIG.NETWORK.NAME} network</p>
                    
                    <button onClick={() => { /*dispatch(connect()); getData();*/ }}>CONECTAR</button>

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
                </div>
        )
        :
        (
            <button
                className="px-8 py-4 bg-black text-white"
                disabled={claimingNft ? 1 : 0}
                            onClick={() => {
                            /*claimNFTs();
                            getData();*/
                            }}
                        >
                            {claimingNft ? "PROCESANDO" : "MINTING"}
            </button>
        )
    )
}




const MintingSection = () => {
    return (
        <div className="bg-blue-300 py-16 px-4">
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
                    <MintingButton />
                </div>
            </div>

            <div>
                <p>
                    Asegurate de estar conectado en la red índicada ({CONFIG.NETWORK.NAME} Mainnet).
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

export default MintingSection;