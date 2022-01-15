import React from "react";

const HeroBackgroundStyle = {
    minHeight: "100vh",
    background: "url(/images/Hero-background.jpg)", 
    backgroundSize: "cover",
    backgroundPosition: "center"
}

const Hero = () => {
    return (
        <section className="bg-purple-400 flex items-center justify-center" style={HeroBackgroundStyle}>
            <img src="/images/yellow-font-logo.png" />
        </section>
    );
}

export default Hero;