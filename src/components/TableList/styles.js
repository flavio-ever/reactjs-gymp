import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  font-size: 16px;

  th {
    color: #444;
    padding: 0 0 10px 0;
  }

  td {
    color: #666;
    padding: 16px 0;
  }

  tr ~ tr {
    border-top: 1px solid #eee;
  }

  tr td:first-child {
    width: 40%;
  }

  tr td:last-child {
    text-align: right;
  }

  button {
    display: inline-block;
    height: auto;
    padding: 0;
    margin-left: 15px;
    font-weight: normal;

    &.btn--edit {
      color: #4d85ee;
    }
    &.btn--remove {
      color: #de3b3b;
    }
  }
`;
