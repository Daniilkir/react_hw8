import Section from "./Section.js"
import React, { Component } from "react";

class Options extends Component {
    render() {
        return (
            <Section title="Please give your feedback">
                <button onClick={this.props.addGoodFeedback}>Good</button>
                <button onClick={this.props.addNeutralFeedback}>Neutral</button>
                <button onClick={this.props.addBadFeedback}>Bad</button>
            </Section>
        )
    }
}
export default Options;