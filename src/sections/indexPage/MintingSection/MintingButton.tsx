import React, { Fragment } from "react";

/*const MintingButton = (blockchain: {}, CONFIG: {}, isMinting:boolean) => {
    const isNotConnected = blockchain.account === "" || blockchain.smartContract === null;

    return (
        <Fragment>
            { isNotConnected && <p>Conéctate a {CONFIG.NETWORK.NAME} network</p> }

            <button disabled={isMinting} className="px-8 py-4 bg-black text-white">
                {
                    isNotConnected ?
                        "CONECTAR"
                    :
                        isMinting ? "PROCESANDO" : "MINTING"
                }
            </button>
        </Fragment>
    );
}

export default MintingButton;*/


/*

const MintingButton = () => {
    return (
         ? 
        (
            <div>
                    
                    
                    <button onClick={() => { /*dispatch(connect()); getData();----- }}>CONECTAR</button>

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
                
                            onClick={() => {
                            /*------
                            }}
                        >
                            {claimingNft ? "PROCESANDO" : "MINTING"}
            </button>
        )
    )
}*/