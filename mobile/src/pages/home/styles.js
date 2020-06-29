import {StyleSheet} from 'react-native';
import colors from '../../commons/colors'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,
        paddingLeft: 20,        
        backgroundColor:colors.background
    },
    containerCategories:{},
    textCategories:{
        fontWeight:'bold',
        color:colors.titles,
        fontSize: 24,
        marginBottom:5,
        marginRight: 5
        
    },
    containerMiniCard:{          
        backgroundColor:colors.primary,         
        borderRadius:20,          
        padding:5   
    },
    titleMiniCard:{
        fontSize: 15,
    },
    lists:{
        marginBottom:20
    }
})

export default styles