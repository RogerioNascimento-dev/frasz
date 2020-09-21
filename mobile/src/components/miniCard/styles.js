import styled from 'styled-components/native';

export const Container = styled.View`
        background-color:${props => props.theme.bgMinicard};
        padding: 10px;
        border-radius:10px;
        align-self:flex-end;
        margin-left: 5px;
    `;    
export const Title =  styled.Text`
        font-weight:bold;
        font-size: 18px;
        color: ${props => props.theme.titlesMinicard};
    `;
export  const SubTitle = styled.Text`
        color: ${props => props.theme.texts};
    `;