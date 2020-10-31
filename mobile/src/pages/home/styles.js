import styled from 'styled-components/native';

export const ScrollViewContainer = styled.View`
    flex:1;
    background-color:${props => props.theme.background};
`;
export const Container = styled.View`        
        padding-top: 10px;
        padding-left: 20px;      
        background-color:${props => props.theme.background};
`;

export const ContainerCategories = styled.View`
`;

export const ContainerMiniCard = styled.View`
        background-color:${props => props.theme.background};  
        border-radius:20px;
        padding:5px;
`;

export const TextCategories =styled.Text`
        font-weight:bold;
        color:${props => props.theme.titles};  
        font-size: 24px;
        margin-bottom:5px;
        margin-right: 5px;
`;


export const SpotlightContainer = styled.View`
    background-color:${props => props.theme.background}; 
    padding:20px;    
`;

export const Lists = styled.FlatList`
    margin-bottom:20px;
`;

export const SpotlightTitleContainer = styled.View`
    flex-direction:row;
`;
export const ContainerTitleCategories = styled.View`
    flex-direction:row;
`;
export const TextNotData = styled.Text`
    color:${props => props.theme.texts}; 
    font-size:16px;
`;

export const SpotlightList = styled.FlatList`
    height:200px;
`;