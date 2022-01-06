import React from "react";

const MintingSection = () => {
    return (
        <div className="bg-blue-300 py-16 px-4">
            <div className="w-1/2 mx-auto p-8 bg-white text-center divide-y divide-gray-600">
                <h3 className="pb-8 text-4xl">7 / 33</h3>

                <div className="py-8">
                    <h4 className="text-3xl text-left pb-4">Cantidad</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="border-2 border-black">1</button>
                        <button className="border-2 border-black">2</button>
                    </div>

                    <div className="pt-4">
                        <p>CANTIDAD cuestan 000 MATIC (00 ETH)</p>
                        <p>Excluyendo precio de gas.</p>
                    </div>
                </div>

                <div className="pt-8">
                    <button className="px-8 py-4 bg-black text-white">MINTING</button>
                </div>
            </div>
        </div>
    );
}

export default MintingSection;