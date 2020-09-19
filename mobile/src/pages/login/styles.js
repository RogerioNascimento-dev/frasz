import styled from 'styled-components/native';
import {widthScreemPercent} from '../../commons/functions';

export const Container = styled.View`
    flex:1;    
    justify-content:center;    
    background-color:${props => props.theme.background};    
`;   

export const ContainerLogo = styled.View`    
    align-items:flex-start;
    justify-content:center;
    padding:0px 20px;    
`;
export const Logo = styled.Image`    
`;
export const TextLogo = styled.Text`
    font-size:28px;
    font-weight:bold;
    color: ${props => props.theme.titles};    
`;

export const ContainerUndrow = styled.View`
    align-items:center;
    justify-content:center;
    margin-top:20px;
`;

export const ContainerButton = styled.View`    
    margin-top:40px;        
    align-items:center;
    justify-content:center;        
`;

export const ButtonLogin = styled.TouchableOpacity`                   
        padding: 10px 30px;
        margin-bottom:5px;                
        background-color:${props =>props.theme.bgButtons};
        width: ${widthScreemPercent(0.8)}px;        
`;

export const ContainerAlignButton = styled.View`           
        flex-direction:row;
        align-items:center;        
        justify-content:center;
        
`;
export const TextButtonLogin = styled.Text`           
    margin-left:10px;
    font-size:16px;
`;