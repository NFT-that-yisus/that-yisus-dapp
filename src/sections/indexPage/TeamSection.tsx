import React from "react";

const TeamSection = () => {
    return (
        <div className="px-4">
            <div className="text-center">
                <h1 className="font-heading text-6xl">El Equipo</h1>
                <h3 className="text-2xl">
                    Detrás de todo gran proyecto hay un gran equipo. <br />
                    Yo soy mente, Dios es mente.    
                </h3>
            </div>

            <div className="py-12 text-center">
                <h2 className="mb-8 font-heading text-4xl text-yellow-400">Staff</h2>

                <div className="flex gap-8 justify-center">
                    <div>
                        <div className="mb-4 w-48 h-48 bg-gray-400 rounded-full" />
                        <b>Black Jack</b>
                        <p>// Description not found.</p>

                        <div className="mt-8 flex gap-8 justify-center items-center">
                            <a href="https://tunel.app/u/literallynotblackjack" target="_blank">
                                <img src="/social-icons/tunel.svg" className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/literallynotblackjack" target="_blank">
                                <img src="/social-icons/instagram.svg" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="mb-4 w-48 h-48 bg-gray-400 rounded-full" />
                        <b>Kevin ¿¿Apellido??</b>
                        <p>Descripción.</p>

                        <div className="mt-8 flex gap-8 justify-center items-center">
                            <a href="" target="_blank">
                                <img src="/social-icons/tunel.svg" className="w-6 h-6" />
                            </a>
                            <a href="" target="_blank">
                                <img src="/social-icons/instagram.svg" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 text-center">
                <h2 className="mb-8 font-heading text-4xl text-blue-400">Artístas</h2>

                
            </div>
        </div>
    );
}

export default TeamSection;