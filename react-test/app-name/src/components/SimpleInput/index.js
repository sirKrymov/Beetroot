import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SimpleInput = (props) => {
  const { isvalid, errortext } = props;
  return (
    <div className={isvalid ? `inputWrapper` : `inputWrapper inputWrapperErorr`}>
      <input {...props} />
      <p className={isvalid ? `inputError` : `inputError inputErrorShow`}>{errortext}</p>
    </div>
  )
};

SimpleInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errortext: PropTypes.string.isRequired,
  isvalid: PropTypes.bool.isRequired
}

export default SimpleInput;