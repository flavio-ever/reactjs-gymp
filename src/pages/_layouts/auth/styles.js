import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;

  /** Centralizar conteúdo */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  width: 100%;
  max-width: 360px;
  padding: 50px 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 153px;
    height: 100px;
    margin: 0 auto;
    display: block;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      display: block;
      font-weight: bold;
      color: #444;
    }

    span {
      color: #ee4d64;
      margin: -10px 0 10px 0;
      display: block;
    }

    input {
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      margin: 8px 0 20px 0;
      color: #000;
      width: 100%;

      display: block;
    }

    button {
      background: #ee4d64;
      color: #fff;
      padding: 13px 0;
      text-align: center;
      border-radius: 4px;
      font-weight: bold;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.2, '#ee4d64')};
      }
    }
  }
`;
