import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import {widthScreemPercent} from '../../commons/functions';

 export const  Container = styled.View`
        flex-direction:row;
        padding-top:${StatusBar.currentHeight + 10}px;
        background-color:${props => props.theme.background};
        padding-top:40px;
        padding-left:20px;
`;
export const  ContainerNameUser = styled.TouchableOpacity`        
        align-content:space-around;
        align-items:flex-start;
        padding:10px 0px 15px 10px;
        
`;
export const  TextNameUser = styled.Text`
        color:${props => props.theme.titles};
        font-weight:bold;
        font-size:18px;        
`;
export const Welcome = styled.Text`
    color:${props => props.theme.texts};
`;
export const LogoMiniHeader = styled.Image`
    width:55px;
    height:55px;
`;
