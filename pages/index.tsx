import React, { PureComponent, Fragment } from "react";

import { /*MintingSection*/ TestSection, RoadmapSection, TeamSection, Footer } from "../src/sections/indexPage";

class IndexPage extends PureComponent {
    render () {
        return (
            <Fragment>
                {/*<MintingSection />*/}
                <TestSection />
                <RoadmapSection />
                <TeamSection />
                <Footer />
            </Fragment>
        )
    }
}

export default IndexPage;