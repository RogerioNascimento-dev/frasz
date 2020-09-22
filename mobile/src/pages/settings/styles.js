import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';

export const Container = styled.View`
  flex:1;
  padding:${StatusBar.currentHeight + 20}px 20px 0px 20px;
  background-color:${props => props.theme.background};
`;
export const ContainerOptions = styled.TouchableOpacity`
  flex-direction:row;
  justify-content:space-between;  
  margin-top:20px;
`;
export const ContainerTextOption = styled.View`
  flex-direction:row;
`;

export const MaterialIcon = styled(MaterialCommunityIcons)`
  color:${props => props.theme.texts};
  margin-right:20px;
`;

export const PersonMaterialIcons = styled(MaterialIcons)`
  color:${props => props.theme.texts};
  margin-right:20px;
`;


export const Title = styled.Text`
  margin-bottom:10px;
  font-size:30px;
  font-weight:bold;
  color:${props => props.theme.titles}
`;

export const TextOption = styled.Text`
    color:${props => props.theme.texts};
    font-weight:bold;
    font-size:18px;
`;

export const CheckBox = styled(MaterialIcons)`
  color:${props => props.theme.texts};  
`;
