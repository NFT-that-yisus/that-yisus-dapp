import React from "react";

const Outcome = () => {
    return (
        <section className="my-32">
            <h1 className="text-6xl font-heading text-center mb-8">Outcome</h1>
            
            <div className="w-1/2 mx-auto p-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg text-white text-center">
                <img src="/social-icons/open-source.svg" width="60px" className="mx-auto" />
                <h2 className="text-2xl mb-4">Open-source</h2>

                <p>Código libre, no inventes la rueda. Encuentra todo el código fuente en GitHub</p>
                <a href="https://github.com/NFT-that-yisus" target="_blank" 
                className="py-2 px-4 my-4 mx-auto bg-white text-black w-max flex gap-2 hover:bg-gray-100 items-center">
                    <img src="/social-icons/github.svg" width="30px" />
                    <h3 className="text-xl">Ir a GitHub</h3>
                </a>
            </div>
        </section>
    )
}

export default Outcome;