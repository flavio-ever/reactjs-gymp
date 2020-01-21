import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Input({ type, placeholder, children, search }) {
  const format = value => {
    if (value.length > 2) {
      search(value);
    } else {
      search('');
    }
  };

  return (
    <Wrapper>
      {children}
      <input
        type={type}
        placeholder={placeholder}
        onKeyUp={param => format(param.target.value)}
      />
    </Wrapper>
  );
}

Input.propTypes = {
  children: PropTypes.element.isRequired,
  placeholder: PropTypes.string,
  search: PropTypes.func,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  search: '',
};
