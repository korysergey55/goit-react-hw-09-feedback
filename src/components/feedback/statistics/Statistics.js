import React from "react";
import Notification from "../notification/Notification";
import { StatiscticsContainer } from "./StatisticsStyled";
import PropTypes from "prop-types";

const Statistics = ({
 state,
 countTotalFeedback,
 countPositiveFeedbackPercentage,
}) => {
 return (
  <StatiscticsContainer>
   {countTotalFeedback() ? (
    <>
     {state.map((item) => (
      <p className={item} name={item} key={item}>
       {item[0]}: {item[1]}
      </p>
     ))}
     <p className="totalStatistics">Total :{countTotalFeedback()}</p>
     <p className="pozitivPersentege">
      PositiveFeedback: {countPositiveFeedbackPercentage()} %
     </p>
    </>
   ) : (
    <Notification message="No feedback given" />
   )}
  </StatiscticsContainer>
 );
};
Statistics.propTypes = {
 state: PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
 ).isRequired,
 countTotalFeedback: PropTypes.func.isRequired,
 countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
