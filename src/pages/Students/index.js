import React, { useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { studentsFindRequest } from '~/store/modules/students/actions';

// import { Container } from './styles';
import { Container, Content } from '~/global/default';
import TableList from '~/components/TableList';
import Input from '~/components/Input';

export default function Students() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);

  useEffect(() => {
    async function loadStudents() {
      dispatch(studentsFindRequest(page, perPage, name));
    }

    loadStudents();
  }, [dispatch, name, page, perPage]);

  const search = value => {
    setName(value);
  };

  return (
    <Container width="1200px" cellpadding="10">
      <nav>
        <h1>Gerenciando alunos</h1>

        <div className="btns">
          <button type="button" className="btn--primary">
            Cadastrar
          </button>
          <Input type="text" placeholder="Buscar Aluno" search={search}>
            <IoMdSearch />
          </Input>
        </div>
      </nav>
      <Content>
        <TableList students={students !== null ? students.data : null} />
      </Content>
    </Container>
  );
}
