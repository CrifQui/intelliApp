import React from 'react';
import Card from '../../components/Card';
import Container from '../../components/ContainerScreen';

const Home = () => {
  return (
    <Container>
      <Card
        handlePress={() => {}}
        image={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        width={'75%'}
        height={'50%'}
        title={'Welcome'}
        subtitle={'to intelli'}
      />
    </Container>
  );
};

export default Home;
