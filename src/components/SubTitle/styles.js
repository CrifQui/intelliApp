import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 14px;
  color: ${props => (props.error ? 'red' : '#6889b1')};
  text-align: ${props => (props.align ? props.align : 'auto')};
`;
