import React from 'react';
import {useTranslation} from 'react-i18next';
import Card from '../../components/Card';
import Container from '../../components/ContainerScreen';

const Home = () => {
  const {t} = useTranslation('common');

  return (
    <Container>
      <Card
        handlePress={() => {}}
        image={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        width={'75%'}
        height={'50%'}
        title={t('@home-welcome')}
        subtitle={t('@home-welcome-subtitle')}
      />
    </Container>
  );
};

export default Home;
