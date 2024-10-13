import "./App.css";
import React, { Component } from "react";
import Options from "./components/Options.js";
import Statistic from "./components/Statistics.js"


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  addNeutralFeedback = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBadFeedback = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  getTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  getPositiveFeedback = () => {
    const total = this.getTotalFeedback();
    return Math.round(((this.state.good)*100)/(total))+"%";
  }
  render() {
    return (
      <>
        <Options
          addGoodFeedback={this.addGoodFeedback}
          addNeutralFeedback={this.addNeutralFeedback}
          addBadFeedback={this.addBadFeedback}
        />
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.getTotalFeedback()}
          percentage={this.getPositiveFeedback()}
        />
      </>
    );
  }
}

export default App;