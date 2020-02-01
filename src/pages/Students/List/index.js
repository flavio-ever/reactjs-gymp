import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoMdSearch } from 'react-icons/io';
import { studentsFindRequest } from '~/store/modules/students/actions';
import Input from '~/components/Input';
import TableList from '~/components/TableList';

import { Container, Content } from '~/global/default';

export default function List() {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const [name, setName] = useState('');

  const dispatch = useDispatch();

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
    <Container width="1200px">
      <nav>
        <h1>Gerenciando alunos</h1>
        <div className="btns">
          <Link to="students/new" type="button" className="btn btn--primary">
            Cadastrar
          </Link>
          <Input type="text" placeholder="Buscar Aluno" search={search}>
            <IoMdSearch />
          </Input>
        </div>
      </nav>
      <Content>
        <TableList
          header={['Nome', 'E-mail', 'Idade']}
          moduleName="students"
          stateName="students"
          setPage={setPage}
        />
      </Content>
    </Container>
  );
}
