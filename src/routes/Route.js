import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import { store } from '~/store';

/**
 * Redirect também é um componente
 * @param {Element} Component Inicial Maiúscula para poder usar a sintaxe JSX
 * @param {Boolean} isPrivate propriedade padrão das rotas privadas
 * @param {Object} rest Spread operator de outros parametros carregados
 */
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // Se está logado ou não
  const { signed } = store.getState().auth;

  // Se nao estiver logado e private for verdadeiro = SignIn
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Se estiver logado e rota não for privada = dashboard
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  /**
   * Se estiver logado e dentro de uma rota privada = Route
   * @props {function} todas as propriedades do componente
   */
  return (
    <Route
      {...rest}
      component={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  // O componente pode ser um elemento ou uma funcao
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
