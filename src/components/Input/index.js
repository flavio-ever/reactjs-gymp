import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Input({ type, placeholder, children }) {
  return (
    <Wrapper>
      {children}
      <input type={type} placeholder={placeholder} />
    </Wrapper>
  );
}

Input.propTypes = {
  children: PropTypes.element.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: '',
};
