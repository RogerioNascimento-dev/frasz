import {StyleSheet} from 'react-native';
import colors from '../../commons/colors'

const styles = StyleSheet.create({
    container:{
        paddingTop:15,
        height: 150,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    containerNameUser:{
        flexDirection:'row',
        alignContent: 'space-around',
        alignItems: 'center'
    },
    textNameUser:{
        color:colors.texts,
        marginRight:10
    }
})

export default styles