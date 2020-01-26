import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

import Input from '~/components/Input';
import TableList from '~/components/TableList';

import { Container, Content } from '~/global/default';

export default function List({ search, setPage }) {
  return (
    <Container width="1200px">
      <nav>
        <h1>Gerenciando alunos</h1>
        <div className="btns">
          <button type="button" className="btn btn--primary">
            Cadastrar
          </button>
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

List.propTypes = {
  search: PropTypes.func,
  setPage: PropTypes.func,
};

List.defaultProps = {
  search: Function,
  setPage: Function,
};
