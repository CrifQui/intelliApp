import React from 'react';
import Form from '../../components/LoginForm';
import Header from '../../components/HeaderLogin';
import {Container} from './styles';

const Login = () => (
  <Container>
    <Header />
    <Form />
  </Container>
);

export default Login;
