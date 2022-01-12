import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-200 p-8 text-center">
            <div className="p-4 mb-8 border-b border-black">
                <p>DIRECCIÓN DEL SMART CONTRACT VERIFICADO: <a href="">____________</a></p>
            </div>

            <div className="grid">
                <div className="flex gap-4 mx-auto">
                    <img src="/social-icons/twitter.svg" />

                    <img src="/social-icons/discord.svg" />

                    <img src="/social-icons/opensea.svg" />
                </div>

                <img className="place-self-center"src="/images/white-rounded-logo.png" width="200px" />
            </div>
        </footer>
    );
}

export default Footer;