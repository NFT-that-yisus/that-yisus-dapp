import React from "react";

const TeamSection = () => {
    return (
        <div className="px-4">
            <div className="text-center">
                <h1 className="font-heading text-6xl md:text-8xl">El Equipo</h1>
                <h3 className="text-xl">
                    Detrás de todo gran proyecto hay un gran equipo. <br />
                    Yo soy mente, Dios es mente.    
                </h3>
            </div>

            <div className="py-12 text-center">
                <div className="mb-8 font-heading text-4xl md:text-6xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-400">
                        Staff
                    </span>
                </div>

                <div className="flex gap-8 justify-center">
                    <div className="w-1/4">
                        <div className="mx-auto mb-4 w-36 h-36 md:w-48 md:h-48 bg-gray-400 rounded-full" />
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

                    <div className="w-1/4">
                        <div className="mx-auto mb-4 w-36 h-36 md:w-48 md:h-48 bg-gray-400 rounded-full" />
                        <b>Kevin Alzablock</b>
                        <p>Joven emprendedor.</p>

                        <div className="mt-8 flex gap-8 justify-center items-center">
                            <a href="https://tunel.app/u/Kev_Alzablock" target="_blank">
                                <img src="/social-icons/tunel.svg" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 text-center">
                <h2 className="mb-8 font-heading text-4xl md:text-6xl text-blue-800">Helpers</h2>

                
            </div>

            <div className="py-12 text-center">
                <div className="mb-8 font-heading text-4xl md:text-6xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Artistas
                    </span>
                </div>


                
            </div>

            <div className="py-12 text-center">
                <h2 className="mb-8 font-heading text-4xl md:text-6xl text-red-600">Social Creators</h2>

                
            </div>

            <div className="py-12 text-center">
                <h2 className="mb-8 font-heading text-4xl md:text-6xl text-purple-900">Moderadores del Club</h2>

                
            </div>
        </div>
    );
}

export default TeamSection;