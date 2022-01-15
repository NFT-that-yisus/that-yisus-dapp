import React from "react";

import { connect } from "react-redux";

import { ICONFIG, IMapStateToProps } from "../../types";

interface IInOpenSeaProps {
    CONFIG: ICONFIG
}

const InOpensea = ({ CONFIG }: IInOpenSeaProps) => {
    return (
        <section className="bg-gradient-to-b from-gray-400 to-gray-600 my-32 py-32 flex gap-16 justify-center items-center">
            <div className="h-80 w-80 bg-gray-600" />
            <div className="h-80 w-80 bg-gray-600" />
            <div className="h-80 w-80 bg-gray-600" />

            <div className="absolute text-center">
                <h1 className="text-6xl md:text-8xl text-white font-heading mix-blend-overlay">
                    Ver {CONFIG.NFT_NAME} minteados en {CONFIG.MARKETPLACE}
                </h1>
                <a href={CONFIG.MARKETPLACE_LINK} target="_blank" className="mx-auto mt-4 w-max py-4 px-8 flex gap-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white items-center hover:from-blue-600 hover:to-blue-800">
                    <h3 className="text-lg md:text-xl">Colección en {CONFIG.MARKETPLACE}</h3> 
                    <img className="w-8 h-8" src="/social-icons/opensea-white.svg" />
                </a>
            </div>
        </section>
    );
}

const mapStateToProps = (state: IMapStateToProps) => ({ CONFIG: state.CONFIG })

export default connect(mapStateToProps)(InOpensea);