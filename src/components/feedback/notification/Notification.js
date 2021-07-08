import React from "react";
import {NotificationContainer} from "./NotificationStyled";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
 return <NotificationContainer>{message}</NotificationContainer>;
};

Notification.propTypes = {
 message: PropTypes.string.isRequired,
};
export default Notification;
