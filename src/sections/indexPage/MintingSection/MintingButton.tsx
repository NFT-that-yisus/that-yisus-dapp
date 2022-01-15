import React, { Fragment } from "react";

const MintingButton = ({ isNotConnected, handleMintingButton, isMinting }) => {
    return (
        <Fragment>
            <button onClick={handleMintingButton} disabled={isMinting} className="px-8 py-4 bg-black text-white">
                {
                    isNotConnected ?
                        "CONECTAR"
                    :
                        isMinting ? "PROCESANDO" : "MINT"
                }
            </button>
        </Fragment>
    );
}

export default MintingButton;