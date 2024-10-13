import Section from "./Section.js";
import Notification from "./Notification.js"
import React, { Component } from "react";

class Statistic extends Component{
    render(){
        if ([this.props.good, this.props.neutral, this.props.bad].some(value => value > 0)) {
            return(
                <Section title="Statistic">
                    <div>
                    <p>Good:{this.props.good}</p>
                    <p>Neutral:{this.props.neutral}</p>
                    <p>Bad:{this.props.bad}</p>
                    <p>Total:{this.props.total}</p>
                    <p>Positive feedback:{this.props.percentage}</p>
                    </div>
                </Section>
            )
          } 
          else {
            return(
                <Notification message="No feedback given"/>
            )
          }
        
    }
}
export default Statistic;