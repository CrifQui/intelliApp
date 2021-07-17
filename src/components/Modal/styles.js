import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const Overlay = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: rgba(0, 0, 0, 0.25);
  flex: 1;
`;

export const Content = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  justify-content: space-around;
  align-content: center;
  height: 50%;
  width: 80%;
`;
