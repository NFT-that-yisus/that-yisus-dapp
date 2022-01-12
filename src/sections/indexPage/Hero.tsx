import React from "react";

const HeroBackgroundStyle = {
    background: "url(/images/Hero-background.jpg)", 
    backgroundSize: "cover",
    backgroundPosition: "center"
}

const Hero = () => {
    return (
        <section className="p-8 bg-purple-400" style={HeroBackgroundStyle}>
            <img src="/images/yellow-font-logo.png" className="mx-auto" />
        </section>
    );
}

export default Hero;