import React from "react";

const TeamSection = () => {
    return (
        <div className="bg-blue-300 py-16 px-4">
            <div className="text-center">
                <h1 className="text-6xl py-8">El Equipo</h1>
                <h2 className="text-2xl">That Yisus fue creado por 2 amigos... .... COMPLETAR</h2>
            </div>

            <div className="py-12 text-center">
                <h2 className="text-4xl mb-8">Staff</h2>

                <div className="flex gap-8 justify-center">
                    <div className="">
                        <div className="mb-4 w-48 h-48 bg-gray-100 rounded-full" />
                        <b>Black Jack</b>
                        <p>Description not found.</p>

                        <div className="mt-8 flex gap-8 justify-center">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path 
                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                />
                            </svg>

                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <path 
                                d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-48 h-48 bg-gray-100 rounded-full" />
                        <b>Kevin???</b>
                        <p>Descripción</p>

                        <p>Twitter</p>
                        <p>Tunnel</p>
                    </div>
                </div>
            </div>

            <div>
                <h2>Diseñadores</h2>

                <div className="flex gap-8">
                    <div>
                        <img src="https://ik.imagekit.io/bayc/assets/garga.png" width="200px" />
                        <b>_____</b>
                        <p>Descripción</p>

                        <p>Instagram</p>
                    </div>

                    <div>
                        <img src="https://ik.imagekit.io/bayc/assets/garga.png" width="200px" />
                        <b>____</b>
                        <p>Descripción</p>

                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamSection;