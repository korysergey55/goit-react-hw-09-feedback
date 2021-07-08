import React, { Component } from "react";
import Section from "./section/Section";
import FeedbackOptions from "./feetbackOptoons/FeedbackOptions";
import Statistics from "./statistics/Statistics";

class Feedback extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0,
 };

 onLeaveFeedback = (scoreName) => {
  this.setState((prevState) => {
   const oldStateValue = prevState[scoreName];
   return { [scoreName]: oldStateValue + 1 };
  });
 };

 countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
  
 };

 countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const total = this.countTotalFeedback();
  const positiveFeedback = Math.round((good / total) * 100);
  return positiveFeedback;
 };

 render() {
  return (
   <>
    <Section title={"Please leave feedback"}>
     <FeedbackOptions
      state={Object.keys(this.state)}
      onLeaveFeedback={this.onLeaveFeedback}
     />
    </Section>

    <Section title={"Statistics"}>
     <Statistics
      state={Object.entries(this.state)}
      countTotalFeedback={this.countTotalFeedback}
      countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
     />
    </Section>
   </>
  );
 }
}
export default Feedback;
