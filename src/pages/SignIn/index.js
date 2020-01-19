import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import logotipoAuth from '~/assets/logo-vertical.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira o e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logotipoAuth} alt="Gympoint" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <div>
          <Input
            label="SEU E-MAIL:"
            name="email"
            type="email"
            placeholder="exemplo@email.com"
            id="email"
          />
        </div>

        <div>
          <Input
            label="SUA SENHA:"
            name="password"
            type="password"
            placeholder="******"
            id="password"
          />
        </div>

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
