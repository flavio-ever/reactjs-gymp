import React from 'react';

// import { Container } from './styles';
import { Container, Content } from '~/global/default';

export default function Students() {
  return (
    <Container>
      <nav>
        <h1>Lorem ipsum</h1>
        <div className="btns">
          <button type="button" className="btn--primary">
            Aplicar
          </button>
          <button type="button" className="btn--secondary">
            Voltar
          </button>
        </div>
      </nav>
      <Content>
        <input type="text" name="" id="" />
      </Content>
    </Container>
  );
}
