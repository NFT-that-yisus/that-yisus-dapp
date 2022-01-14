import React from "react";

const InOpensea = () => {
    return (
        <section className="bg-gradient-to-b from-gray-400 to-gray-600 my-32 py-32 flex gap-16 justify-center items-center">
            <div className="h-80 w-80 bg-gray-600" />
            <div className="h-80 w-80 bg-gray-600" />
            <div className="h-80 w-80 bg-gray-600" />

            <div className="absolute text-center">
                <h1 className="text-6xl text-white font-heading mix-blend-overlay">
                    Ver That Yisus Exclusive Limited Colletion minteados en Opensea
                </h1>
                <button className="mx-auto mt-4 py-4 px-8 flex gap-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white items-center hover:from-blue-600 hover:to-blue-800">
                    <h3 className="text-xl">Colección en Opensea</h3> 
                    <img className="w-8 h-8" src="/social-icons/opensea-white.svg" />
                </button>
            </div>
        </section>
    );
}

export default InOpensea;