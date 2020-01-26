import React from 'react';
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io';
import {} from '@';

import PropTypes from 'prop-types';

import { Container, Content } from '~/global/default';

export default function Form() {
  return (
    <Container width="900px">
      <nav>
        <h1>Edição de Aluno</h1>
        <div className="btns">
          <button type="button" className="btn btn--secondary">
            <IoIosArrowBack size={14} /> <span>VOLTAR</span>
          </button>
          <button type="button" className="btn btn--primary">
            <IoMdCheckmark size={14} /> <span>SALVAR</span>
          </button>
        </div>
      </nav>
      <Content>xxxxx</Content>
    </Container>
  );
}

Form.propTypes = {};

Form.defaultProps = {};
