import React from 'react';
import Subtitle from '../SubTitle';
import Title from '../Title';
import {Container} from './styles';
import {useTranslation} from 'react-i18next';

const HeaderLogin = () => {
  const {t} = useTranslation('common');
  return (
    <Container>
      <Title text={t('@login-title')} />
      <Subtitle text={t('@login-welcome')} />
    </Container>
  );
};

export default HeaderLogin;
