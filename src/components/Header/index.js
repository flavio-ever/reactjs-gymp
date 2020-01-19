import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-horizontal.svg';

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
          <NavLink activeClassName="selected" to="/students">
            ALUNOS
          </NavLink>
          <NavLink activeClassName="selected" to="/plans">
            PLANOS
          </NavLink>
          <NavLink activeClassName="selected" to="/enrollment">
            MATRÍCULAS
          </NavLink>
          <NavLink activeClassName="selected" to="/orders">
            PEDIDOS DE AUXÍLIO
          </NavLink>
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
