import React, {useState} from 'react';
import Button from '../Button';
import Input from '../InputText';
import {login} from '../../api/api';
import {Container} from './styles';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({user: '', pass: ''});
  const [auth, setAuth] = useState('');

  const handleChangeUsername = user => {
    setCredentials(data => ({...data, user}));
  };

  const handleChangePass = pass => {
    setCredentials(data => ({...data, pass}));
  };

  const handlePress = async () => {
    const data = await login(credentials);
    console.warn(data, 'data');
  };

  return (
    <Container>
      <Input
        placeholder={'username'}
        value={credentials?.user}
        setValue={setCredentials}
        handleChange={handleChangeUsername}
      />
      <Input
        secureTextEntry={true}
        placeholder={'password'}
        value={credentials?.pass}
        setValue={setCredentials}
        handleChange={handleChangePass}
      />
      <Button text={'Login'} handlePress={handlePress} />
    </Container>
  );
};

export default LoginForm;
