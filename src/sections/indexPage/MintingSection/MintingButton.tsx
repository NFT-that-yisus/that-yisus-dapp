import React, { Fragment } from "react";

interface IMintingButtonProps {
    isNotConnected: boolean,
    handleMintingButton: () => void,
    isMinting: boolean
}

const MintingButton = ({ isNotConnected, handleMintingButton, isMinting }: IMintingButtonProps) => {
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