import React from "react";

import { connect } from "react-redux";

import { ICONFIG, IMapStateToProps } from "../../types";

interface IFooterProps {
    CONFIG: ICONFIG
}

const Footer = ({ CONFIG }: IFooterProps) => {
    return (
        <footer className="bg-gradient-to-b from-blue-400 to-blue-200 p-8 text-center">
            <div className="p-4 mb-8 border-b border-black">
                <p>DIRECCIÓN DEL SMART CONTRACT VERIFICADO: <a href={CONFIG.SCAN_LINK} target="_blank" className="underline">{CONFIG.CONTRACT_ADDRESS}</a></p>
            </div>

            <div className="w-max mx-auto">
                <div className="flex gap-8 items-center justify-center">
                    <a href="https://twitter.com/that_yisus" target="_blank"><img src="/social-icons/twitter.svg" className="w-8 h-8" /></a>

                    <a href="https://discord.com/invite/qjYNHpU29P" target="_blank"><img src="/social-icons/discord.svg" className="w-8 h-8" /></a>

                    <a href={CONFIG.MARKETPLACE_LINK} target="_blank"><img src="/social-icons/opensea.svg" className="w-8 h-8" /></a>
                </div>

                <img src="/images/white-rounded-logo.png" width="200px" />
            </div>
        </footer>
    );
}

const mapStateToProps = (state: IMapStateToProps) => ({ CONFIG: state.CONFIG })

export default connect(mapStateToProps)(Footer);