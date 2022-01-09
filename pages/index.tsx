import React, { PureComponent, Fragment } from "react";

import { MintingSection, RoadmapSection, TeamSection, Footer } from "../src/sections/indexPage";

class IndexPage extends PureComponent {
    render () {
        return (
            <Fragment>
                <MintingSection />
                <RoadmapSection />
                <TeamSection />
                <Footer />
            </Fragment>
        )
    }
}

export default IndexPage;