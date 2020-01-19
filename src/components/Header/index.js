import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-header-3@3x.png';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/enrollment">MATRÍCULAS</Link>
          <Link to="/orders">PEDIDOS DE AUXÍLIO</Link>
        </nav>
        <aside>
          <Profile>
            <p>{profile.name}</p>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
