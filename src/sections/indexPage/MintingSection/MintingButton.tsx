import React, { Fragment } from "react";

const MintingButton = ({ isNotConnected, CONFIG, handleMintingButton, isMinting }) => {
    return (
        <Fragment>
            { isNotConnected && <p className="pb-4">Conéctate a {CONFIG.NETWORK.NAME} network</p> }

            <button onClick={handleMintingButton} disabled={isMinting} className="px-8 py-4 bg-black text-white">
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

export default MintingButton;