import styled from 'styled-components/native';
import Search from '../../../public/search.svg';

export const Container = styled.View`
  position: relative;
  align-items: flex-end;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 0;
  right: 10px;
`;
