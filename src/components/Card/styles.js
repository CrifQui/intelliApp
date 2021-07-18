import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f6f8fe;
  border-radius: 20px;
  height: 280px;
  padding: 7px;
  margin: 10px 5px;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
`;

export const Content = styled.View`
  height: 70%;
  width: 100%;
  margin-bottom: 20px;
`;

export const Touchable = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;
