import React from "react";

const RevelationEventBackgroundStyle = {
    background: "url(/images/RevelationEvent-background.jpg)",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
}

const RevelationEvent = () => {
    return (
        <section className="py-32 px-4 mx-2 my-32 md:mx-8 rounded-lg text-center text-white md:px-16" style={RevelationEventBackgroundStyle}>
            <h1 className="font-heading text-6xl md:text-8xl">La llegada del Salvador</h1>
            <h3 className="text-2xl md:text-4xl">Revelación NFTs en metaverso Spatial.io (todos pueden entrar).</h3>
            <p className="mt-16 mx-auto bg-white text-black rounded-lg p-2 text-lg md:text-xl md:w-1/2">Fecha y hora: Serán anunciados en Club Discord</p>
        </section>
    );
}

export default RevelationEvent;