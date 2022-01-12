import React, { PureComponent, Fragment } from "react";

import { Hero, RevelationEvent, MintingSection, InOpensea, RoadmapSection, 
    TeamSection, Outcome, Footer } from "../src/sections/indexPage";

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
                <Outcome />
                <Footer />
            </Fragment>
        )
    }
}

export default IndexPage;