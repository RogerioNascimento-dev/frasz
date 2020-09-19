import {StyleSheet} from 'react-native';
import colors from '../../commons/colors'
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background
    },
    containerLogo:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerApresentation:{
        flex: 1,
        padding:30,        
    },
    title:{
        fontSize:24,        
        fontWeight:'bold',
        fontFamily:'Roboto',
        color:colors.titles
    },
    subTitle:{
        fontSize:15,                
        fontFamily:'Roboto',
        color:colors.texts,
        lineHeight: 20.5
    },
    containerButton:{
        marginTop:20,
    },
    buttonLogin:{
        backgroundColor:colors.primary,
        padding:10,
        alignItems:'center',
        justifyContent: 'center'        
    },
    textButtonLogin:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10
    },
    containerAlignButton:{
        alignItems:'center',         
        flexDirection:'row',
        alignContent:'space-around'
    }
})


export default styles;