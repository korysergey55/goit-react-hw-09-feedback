import React from "react";
import { FeedbackContainer } from "./FeedbackOptionsStyled";
import PropTypes, { arrayOf, string } from "prop-types";

const FeedbackOptions = ({ state, onLeaveFeedback }) => {
    
   const callBack = (event) => onLeaveFeedback(event.target.name);
 return (
  <FeedbackContainer>
   {state.map((option) => (
    <button key={option} type="button" name={option} className={option} onClick={callBack}>
     {option.toUpperCase()}
    </button>
   ))}
  </FeedbackContainer>
 );
};

FeedbackOptions.prototype = {
 state: arrayOf(PropTypes.arrayOf(string)).isRequired,
 onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
