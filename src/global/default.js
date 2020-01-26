import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: ${props => props.width || '900px'};

  margin: 0 auto;
  padding: 0 30px;

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
      *:not(button) {
        order: 2;
        margin: 0 5px 0 5px;
      }

      display: flex;
      button {
        margin-left: 10px;
      }
    }
  }

  input[type='text'],
  input[type='password'],
  input[type='email'] {
    background: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
    height: 36px;
    padding: 0 15px;
    color: #666;
    width: 100%;

    display: block;
  }

  button.btn {
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
