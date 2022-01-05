import React from "react";

const MintSection = () => {
    return (
        <div className="bg-blue-300 py-16 px-4">
            <h1 className="text-6xl">Mintea tus That Yisus</h1>

            <div className="my-8 bg-white">
                <p>0 / 33</p>
                <p>2 Yisus cuestan 6.6 ETH</p>

                <div className="">
                    <p>Cantidad</p>
                    <div className="grid grid-cols-2 gap-2">
                        <button className="bg-gray-100">1</button>
                        <button className="bg-gray-100">2</button>
                    </div>
                </div>

                <button className="bg-yellow-400 p-2">MINT</button>
            </div>
        </div>
    );
}

export default MintSection;