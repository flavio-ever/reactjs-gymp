import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-bottom: solid 1px #ddd;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;

  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 135px;
      height: 24px;
      margin-right: 20px;
      padding-right: 20px;

      border-right: 1px solid #ddd;
    }

    a {
      color: #999;
      text-transform: uppercase;
      font-weight: bold;
      padding-right: 20px;
    }

    .selected {
      color: #444;
    }
  }

  aside {
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      color: #666;
      font-weight: bold;
    }

    button {
      color: #ee4d64;
    }

    * {
      flex: 1;
      margin: 5px 0;
    }
  }
`;

export const Profile = styled.div``;
