import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  input {
    padding-left: 38px !important;
    &::placeholder {
      color: #999;
    }
  }

  svg {
    position: absolute;

    top: 29%;
    left: 16px;

    width: 16px !important;
    height: 16px !important;

    color: #999;
  }
`;
