import React from 'react';
import Subtitle from '../SubTitle';
import Title from '../Title';
import {Container} from './styles';

const HeaderLogin = () => (
  <Container>
    <Title text={'Login account'} />
    <Subtitle text={'Welcome to intelli next'} />
  </Container>
);

export default HeaderLogin;
