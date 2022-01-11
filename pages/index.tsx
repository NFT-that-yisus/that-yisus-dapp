import React, { PureComponent, Fragment } from "react";

import { Hero, RevelationEvent, MintingSection, InOpensea, RoadmapSection, 
    TeamSection, Footer } from "../src/sections/indexPage";

class IndexPage extends PureComponent {
    render () {
        return (
            <Fragment>
                <Hero />
                <RevelationEvent />
                <MintingSection />
                <InOpensea />
                <RoadmapSection />
                <TeamSection />
                <Footer />
            </Fragment>
        )
    }
}

export default IndexPage;