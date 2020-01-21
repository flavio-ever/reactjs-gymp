import { all, call, put, takeLatest } from 'redux-saga/effects';

import { studentsFindSuccess, studentsFindFailure } from './actions';

import api from '~/services/api';

// Recebe payload
export function* studentsFind({ payload }) {
  try {
    const { page, perPage, name } = payload;

    const { data: students } = yield call(api.get, 'students', {
      params: {
        page,
        perPage,
        name,
      },
    });

    yield put(studentsFindSuccess(students));
  } catch (error) {
    yield put(studentsFindFailure());
  }
}

// Fica ouvindo
export default all([
  takeLatest('@students/STUDENTS_FIND_REQUEST', studentsFind),
]);
