import React, { PureComponent } from "react";

import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../../redux/actions/counterActions";

interface ITestSectionProps {
    counter: number,
    incrementCount: () => {},
    decrementCount: () => {} 
}

interface ITestSectionState {
}

class TestSection extends PureComponent<ITestSectionProps, ITestSectionState> {
    render () {
        return (
            <div>
                <h1>COUNT: {this.props.counter}</h1>
                
                <button onClick={this.props.incrementCount}>+</button>
                <button onClick={this.props.decrementCount}>-</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter.count
});

const mapDispatchToProps = {
    incrementCount: incrementCount,
    decrementCount: decrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestSection);
