import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import { Table } from './styles';

export default function TableList({ moduleName, stateName, setPage, header }) {
  const students = useSelector(state => state[moduleName][stateName]);

  if (!students) {
    return <div>Ops! Infelizmente nenhum aluno encontrado.</div>;
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            {header.map(name => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.data.map(student => (
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
      <Pagination
        total={students.total}
        totalPage={students.totalPage}
        perPage={students.perPage}
        page={students.page}
        setPage={setPage}
      />
    </>
  );
}

TableList.propTypes = {
  header: PropTypes.arrayOf(PropTypes.any),
  setPage: PropTypes.func,
  stateName: PropTypes.string,
  moduleName: PropTypes.string,
};

TableList.defaultProps = {
  header: [],
  setPage: Function,
  stateName: '',
  moduleName: '',
};
