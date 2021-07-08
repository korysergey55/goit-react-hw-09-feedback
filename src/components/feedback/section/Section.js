import React from "react";
import {SectionContainer} from "./SectionStyled";
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
 return (
  <SectionContainer>
   <h2 className="title">{title}</h2>
   {children}
  </SectionContainer>
 );
};

Section.prototype = {
 title: PropTypes.string,
 children: PropTypes.node.isRequired,
};
export default Section;
