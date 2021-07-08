import React, { useState } from "react";
import Section from "./section/Section";
import FeedbackOptions from "./feetbackOptoons/FeedbackOptions";
import Statistics from "./statistics/Statistics";

const initialState = {
 good: 0,
 neutral: 0,
 bad: 0,
};

const Feedback = () => {
 const [state, setState] = useState(initialState);

 const onLeaveFeedback = (name) => {
  setState((prevState) => ({ ...prevState, [name]: prevState[name] + 1 }));
 };

 const countTotalFeedback = () => {
  const { good, neutral, bad } = state;
  return good + neutral + bad;
 };

 const countPositiveFeedbackPercentage = () => {
  const { good } = state;
  const total = countTotalFeedback();
  const positiveFeedback = Math.round((good / total) * 100);
  return positiveFeedback;
 };

 return (
  <>
   <Section title={"Please leave feedback"}>
    <FeedbackOptions
     state={Object.keys(state)}
     onLeaveFeedback={onLeaveFeedback}
    />
   </Section>

   <Section title={"Statistics"}>
    <Statistics
     state={Object.entries(state)}
     countTotalFeedback={countTotalFeedback}
     countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
    />
   </Section>
  </>
 );
};

export default Feedback;
