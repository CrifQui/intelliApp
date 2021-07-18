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
