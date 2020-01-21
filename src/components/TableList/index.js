import React from 'react';

import PropTypes from 'prop-types';
import { Table } from './styles';

export default function TableList({ students }) {
  if (!students || !students.length) {
    return <div>Ops! Infelizmente nenhum aluno encontrado.</div>;
  }

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
        {students.map(student => (
          <tr key={student.email}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td colSpan="0">{student.age}</td>
            <td colSpan="0">
              <button type="button" className="btn--edit">
                editar
              </button>
              <button type="button" className="btn--remove">
                apagar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TableList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.any),
};

TableList.defaultProps = {
  students: null,
};
