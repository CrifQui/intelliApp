import React, {useState, useEffect, useContext} from 'react';
import Button from '../Button';
import Input from '../InputText';
import {login} from '../../api/api';
import useGetData from '../../hooks/useGetData';
import Subtitle from '../SubTitle/subtitle';
import {Context} from '../../contexts/contextProvider';
import {Container} from './styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const [password, setPassword] = useState();
  const {setIsAuth} = useContext(Context);
  const [inputError, setInputError] = useState(false);
  const {error, loadData, errorMessage} = useGetData();

  const handlePress = async () => {
    if (email && password) {
      const credentials = {email, password};
      loadData(login, credentials, setData);
    }
  };

  useEffect(() => {
    data?.token && setIsAuth(true);
  }, [data, setIsAuth]);

  useEffect(() => {
    setInputError(error);
  }, [error]);

  return (
    <Container>
      <Input
        placeholder={'username'}
        value={email}
        setValue={setEmail}
        error={inputError}
      />
      <Input
        secureTextEntry={true}
        placeholder={'password'}
        value={password}
        setValue={setPassword}
        error={inputError}
      />
      <Button text={'Login'} handlePress={handlePress} />
      {error && (
        <Subtitle align={'center'} text={errorMessage?.email} error={error} />
      )}
    </Container>
  );
};

export default LoginForm;
