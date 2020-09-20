import styled from 'styled-components/native';

export const Container = styled.View`
        flex:1;
        align-Items:center;
        justify-content:center;
        background-color:${props => props.theme.background};
`;  

export const TextTeste = styled.Text`
        color: ${props => props.theme.titles};
`;