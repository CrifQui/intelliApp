import styled from 'styled-components/native';

export const Input = styled.TextInput`
  border: solid 1px ${props => (!props.error ? '#6889b1' : 'red')};
  width: 100%;
  border-radius: 10px;
  color: #2f455f;
  font-size: 14px;
  background-color: white;
  padding: 2%;
`;
