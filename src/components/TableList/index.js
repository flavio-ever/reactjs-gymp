import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import { Table } from './styles';

export default function TableList({ moduleName, stateName, header, setPage }) {
  const data = useSelector(state => state[moduleName][stateName]);

  if (!data || !data.data.length) {
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
          {data.data.map(student => (
            <tr key={student.email}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td colSpan="0">{student.age}</td>
              <td colSpan="0">
                <Link className="btn--edit" to={`students/${student.id}/edit`}>
                  editar
                </Link>
                <button type="button" className="btn--remove">
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        total={data.total}
        totalPage={data.totalPage}
        perPage={data.perPage}
        page={data.page}
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
