import {Dimensions} from 'react-native';

export function widthScreemPercent(percent){
    const {width} = Dimensions.get('window');
    return width * percent;
}

export function heightScreemPercent(percent){
    const {height} = Dimensions.get('window');
    return height * percent;
}
export function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}