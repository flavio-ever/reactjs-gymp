import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentsFindRequest } from '~/store/modules/students/actions';

import List from './List';
import Form from './Form';

export default function Students() {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const edit = false;

  useEffect(() => {
    async function loadStudents() {
      dispatch(studentsFindRequest(page, perPage, name));
    }

    loadStudents();
  }, [dispatch, name, page, perPage]);

  const search = value => {
    setName(value);
  };

  if (edit) return <Form />;
  if (!edit) return <List search={search} setPage={setPage} />;
}
