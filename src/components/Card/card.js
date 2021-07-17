import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Subtitle from '../SubTitle';
import {Container, Content} from './styles';

const Card = ({title, subtitle, image, handlePress}) => (
  <Container onPress={() => handlePress()}>
    <Content />
    <Title text={'Item Titulo'} />
    <Subtitle text={'Item desc'} />
  </Container>
);

Card.propTypes = {
  handlePress: PropTypes.func.isRequired,
};

export default Card;
