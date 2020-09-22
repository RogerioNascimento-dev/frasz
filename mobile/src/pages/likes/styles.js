import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
  background-color:${props => props.theme.background};
`;

export const TextExemple = styled.Text`
  font-size:20px;
  font-weight:bold;
  color:${props => props.theme.texts}
`;
