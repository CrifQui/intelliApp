import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Subtitle from '../SubTitle';
import {Container} from './styles';

const Device = ({title, subtitle, width, height}) => (
  <Container width={width} height={height}>
    <Title text={title?.toUpperCase()} />
    <Subtitle text={subtitle} />
  </Container>
);

Device.propTypes = {
  subtitle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
};

export default Device;
