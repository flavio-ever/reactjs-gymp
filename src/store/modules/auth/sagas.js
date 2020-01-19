import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';
import api from '~/services/api';

// Recebe payload
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/students');
  } catch (error) {
    toast.error('Falha na autenticação, vetifique os inputs.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

// Fica ouvindo
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
