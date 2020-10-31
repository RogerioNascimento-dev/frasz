import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

export const Container = styled.View`
  flex:1;
  padding:${StatusBar.currentHeight + 20}px 20px 0px 20px;
  background-color:${props => props.theme.background};
`;

export const Title = styled.Text`
  margin-bottom:10px;
  margin-right:10px;
  font-size:30px;
  font-weight:bold;
  color:${props => props.theme.titles}
`;

export const Lists = styled.FlatList`
    margin-bottom:20px;
`;

export const ContainerTitle = styled.View`
  flex-direction:row;
`;
export const LikedList = styled.FlatList`

`;