import React from 'react';

import { Table } from './styles';

export default function TableList() {
  return (
    <Table>
      <thead>
        <tr>
          <th>NOME</th>
          <th>E-MAIL</th>
          <th>IDADE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Flavio Everton</td>
          <td>flavio.ever@cloud.com</td>
          <td colSpan="0">25</td>
          <td colSpan="0">
            <button type="button" className="btn--edit">
              editar
            </button>
            <button type="button" className="btn--remove">
              apagar
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
