import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = (props) => (
  <button
    onClick={props.onClick}
    className="addButton"
  >
    {props.label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default Button;