import React, { PureComponent, Fragment } from "react";

import { MintSection, RoadmapSection, TeamSection, Footer } from "../src/sections/indexPage";

class IndexPage extends PureComponent {
    render () {
        return (
            <Fragment>
                <MintSection />
                <RoadmapSection />
                <TeamSection />
                <Footer />
            </Fragment>
        )
    }
}

export default IndexPage;