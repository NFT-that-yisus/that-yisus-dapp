import React from "react";

import { ICONFIG, IBlockchainState } from "../../../types";

import MintingButton from "./MintingButton";

interface IMintingSectionProps {
    data: {
        loading: false,
        totalSupply: 0,
        cost: 0,
        error: false,
        errorMsg: "",
    },
    CONFIG: ICONFIG,
    setMintAmount: (mintAmount:number) => void, 
    mintAmount: number, 
    isNotConnected: boolean, 
    feedback: string, 
    blockchain: IBlockchainState, 
    handleMintingButton: () => void, 
    isMinting: boolean
}

const MintingSection = ({ data, CONFIG, setMintAmount, mintAmount, isNotConnected, 
    feedback, blockchain, handleMintingButton, isMinting }: IMintingSectionProps) => {
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
                        onClick={() => setMintAmount(1)}>1</button>
                        <button className="text-xl bg-purple-200 border-2 border-black hover:bg-purple-300" 
                        onClick={() => setMintAmount(2)}>2</button>
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
                    handleMintingButton={handleMintingButton} isMinting={isMinting} />
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

export default MintingSection;