import Section from "./Section.js"
import React, { Component } from "react";

class Notification extends Component{
    render(){
        return(
            <Section title="Statistic">
            <p>{this.props.message}</p>
            </Section>
        )
    }
}
export default Notification;