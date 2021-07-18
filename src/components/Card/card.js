import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Subtitle from '../SubTitle';
import {Container, Content, Image, Touchable} from './styles';

const Card = ({title, subtitle, image, width, height, handlePress, id}) => (
  <Container width={width} height={height}>
    <Touchable onPress={() => handlePress(id)}>
      <>
        <Content>{image !== 'undefined' && <Image source={image} />}</Content>
        <Title text={title?.toUpperCase()} />
        <Subtitle text={subtitle} />
      </>
    </Touchable>
  </Container>
);

Card.propTypes = {
  handlePress: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default Card;
