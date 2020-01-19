import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  width: 900px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #444;
    }

    margin: 20px 0;

    .btns {
      display: flex;
      button {
        margin-left: 10px;
      }
    }
  }

  button {
    color: #fff;
    height: 36px;
    padding: 0 16px;
    text-align: center;
    border-radius: 4px;
    font-weight: bold;
    transition: background 0.3s;
    display: flex;

    &.btn--primary {
      background: #ee4d64;
      order: 2;

      &:hover {
        background: ${darken(0.2, '#ee4d64')};
      }
    }

    &.btn--secondary {
      background: #cccccc;
      order: 1;

      &:hover {
        background: ${darken(0.2, '#cccccc')};
      }
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;
`;
