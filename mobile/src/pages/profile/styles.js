import styled from 'styled-components/native';
import {widthScreemPercent} from '../../commons/functions';
export const Container = styled.View`
        flex:1;
        align-Items:center;
        justify-content:center;
        background-color:${props => props.theme.background};
`;  

export const ContainerImagePerfil = styled.View`  
        align-items:center;      
        justify-content:center;
        width:${widthScreemPercent(0.8)}px;
`;

export const Craze = styled.Image`      
        position:absolute;  
        z-index:999;
        top:-15px;
        left:${widthScreemPercent(0.20)}px;
        width:50px;
        height:50px;
`;
export const ImagePerfil = styled.Image`   
        width:150px;
        height:150px;
        border-radius:75px;
`;

export const Name = styled.Text`
        color:${props  => props.theme.titles};
        font-size: 23px;
        font-weight:bold;
`;
export const Biography = styled.Text`
        color:${props  => props.theme.texts};
        font-size:15px;
        text-align:center;
`;