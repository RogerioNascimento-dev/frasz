
import {heightScreemPercent} from '../../commons/functions';
import styled from 'styled-components/native';


export const Container = styled.View`
    margin-bottom:20px;
    
`;

export const ContainerPhrase = styled.View`
        background-color:${props => props.theme.bgCard};
        padding:15px;        
        border-color:${props => props.theme.bgBottomCard};
        border-top-width: 1px;
        border-left-width: 1px;
        border-right-width: 1px;
`;
export const Phrase = styled.Text`
        font-size: 15px;
        color: ${props => props.theme.texts};
        font-weight:300;
`;

export const ContainerFooter = styled.View`

        height:${heightScreemPercent(0.06)}px;
        background-color:${props => props.theme.bgBottomCard};
        flex-direction:row;
        padding:0px 20px;
        align-items:center;
        justify-content:space-between;
`;

export const ContainerFooterBottons = styled.View`
    flex-direction:row;
`;

export const AuthorText = styled.Text`
    font-size:14px;
    font-weight:bold;
    color:${props => props.theme.texts};
`;