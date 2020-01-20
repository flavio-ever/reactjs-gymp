import React, { useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import api from '~/services/api';

// import { Container } from './styles';
import { Container, Content } from '~/global/default';
import TableList from '~/components/TableList';
import Input from '~/components/Input';

export default function Students() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students', {
        params: {
          page,
          perPage,
          name,
        },
      });
      console.tron.log(response);
    }

    loadStudents();
  }, [name, page, perPage]);

  return (
    <Container width="1200px" cellpadding="10">
      <nav>
        <h1>Gerenciando alunos</h1>

        <div className="btns">
          <button type="button" className="btn--primary">
            Cadastrar
          </button>
          <Input type="text" placeholder="Buscar Aluno">
            <IoMdSearch />
          </Input>
        </div>
      </nav>
      <Content>
        <TableList />
      </Content>
    </Container>
  );
}
