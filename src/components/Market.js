import React from "react";
import PropTypes from "prop-types";

function Market(props) {
  return(
  <React.Fragment>
    <h3>Market</h3>
    <h3> {props.day}</h3>
    <h3> {props.location}</h3>
    <h3> {props.hours}</h3>
    <h3> {props.booth}</h3>

  </React.Fragment>
  )
}

Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string

}

export default Market;