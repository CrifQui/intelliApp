/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import Button from '../Button';
import Input from '../InputText';
import {login} from '../../api/api';
import useGetData from '../../hooks/useGetData';
import Subtitle from '../SubTitle/subtitle';
import {Context} from '../../contexts/contextProvider';
import {Container} from './styles';
import {useFocusEffect} from '@react-navigation/native';

const LoginForm = () => {
  const {t} = useTranslation('common');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const [password, setPassword] = useState();
  const {setIsAuth, setToken} = useContext(Context);
  const [inputError, setInputError] = useState(false);
  const {error, loadData, errorMessage} = useGetData();

  const handlePress = async () => {
    if (email && password) {
      const credentials = {email, password};
      loadData(login, credentials, setData);
    }
  };

  useFocusEffect(
    useCallback(() => {
      data?.token && setIsAuth(true);
      data?.token && setToken(data?.token);
    }, [data?.token]),
  );

  useFocusEffect(
    useCallback(() => {
      setInputError(error);
    }, [error]),
  );

  return (
    <Container>
      <Input
        placeholder={t('@login-placeholder-user')}
        value={email}
        setValue={setEmail}
        error={inputError}
      />
      <Input
        secureTextEntry={true}
        placeholder={t('@login-placeholder-pass')}
        value={password}
        setValue={setPassword}
        error={inputError}
      />
      <Button text={t('@login-title')} handlePress={handlePress} />
      {error && (
        <Subtitle align={'center'} text={errorMessage?.email} error={error} />
      )}
    </Container>
  );
};

export default LoginForm;
