import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Content, Wrap, Inputs } from '~/global/default';

import api from '~/services/api';

import history from '~/services/history';

export default function StudentsForm() {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string()
      .max(255, 'Nome pode ter no máximo 255 caracteres')
      .required('Nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .max(255, 'E-mail pode ter no máximo 255 caracteres')
      .required('E-mail é obrigatório'),
    age: Yup.string().required('Dia do nascimento é obrigatório'),
    weight: Yup.number()
      .typeError('Peso é obrigatório')
      .required('Peso é obrigatório'),
    height: Yup.number()
      .typeError('Altura é obrigatória')
      .required('Altura é obrigatória'),
  });

  useEffect(() => {
    async function loadStudent() {
      try {
        setLoading(true);

        const response = await api.get(`/students/${id}`);

        const { data } = response;

        setStudent({
          ...data,
        });

        setLoading(false);
      } catch (error) {
        toast.error('Aluno não encontrado!');

        history.push('/students');
      }
    }

    if (id) {
      loadStudent();
    }
  }, [id, setLoading, setStudent]);

  async function handleSubmit(data) {
    if (id) {
      try {
        const { name, email, age, weight, height } = data;

        await api.put(`students/${id}`, { name, email, age, weight, height });

        toast.success('Usuário editado com sucesso.');

        history.push('/students');
      } catch (error) {
        toast.error('Não foi possível cadastrar o aluno.');
      }
    } else {
      try {
        const { name, email, birth, age, height, weight } = data;

        await api.post('students', { name, email, birth, age, height, weight });

        toast.success('Usuário cadastrado com sucesso.');

        history.push('/students');
      } catch (error) {
        toast.error('Não foi possível cadastrar o aluno.');
      }
    }
  }

  return (
    <Container width="900px">
      <Form initialData={student} schema={schema} onSubmit={handleSubmit}>
        <nav>
          <h1>{id ? 'Editar aluno' : 'Cadastrar aluno'}</h1>
          <div className="btns">
            <Link to="/students" type="button" className="btn btn--secondary">
              <IoIosArrowBack size={14} /> <span>VOLTAR</span>
            </Link>
            <button type="submit" className="btn btn--primary">
              <IoMdCheckmark size={14} /> <span>SALVAR</span>
            </button>
          </div>
        </nav>
        <Content pad="20">
          <Inputs>
            <Wrap>
              <Input
                disabled={loading}
                type="text"
                name="name"
                placeholder="Seu Nome"
                label="NOME COMPLETO"
              />
            </Wrap>
            <Wrap>
              <Input
                disabled={loading}
                type="text"
                name="email"
                placeholder="seu@email.com"
                label="ENDEREÇO DE E-MAIL"
              />
            </Wrap>
            <Wrap size={33.3}>
              <Input
                disabled={loading}
                type="text"
                name="age"
                placeholder="1"
                label="IDADE"
              />
            </Wrap>
            <Wrap size={33.3}>
              <Input
                disabled={loading}
                type="text"
                name="weight"
                placeholder="1"
                label="PESO (em kg)"
              />
            </Wrap>
            <Wrap size={33.3}>
              <Input
                disabled={loading}
                type="text"
                name="height"
                placeholder="1"
                label="ALTURA"
              />
            </Wrap>
          </Inputs>
        </Content>
      </Form>
    </Container>
  );
}
