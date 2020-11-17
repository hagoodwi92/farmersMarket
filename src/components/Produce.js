import React from 'react';
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h3>{props.month}-{props.selection+ " "}</h3>
      <hr/>
    </React.Fragment>
  )
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default Produce;