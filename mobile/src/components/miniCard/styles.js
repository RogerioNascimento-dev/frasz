import { StyleSheet } from 'react-native'
import colors from '../../commons/colors'
import {widthScreemPercent} from '../../commons/functions'

const styles = StyleSheet.create({
    container:{        
        backgroundColor:colors.primary,
        padding: 10,
        borderRadius:10,       
       alignSelf:"flex-end",
        marginLeft: 5
    },
    containerTouch:{},
    title:{
        fontWeight:'bold',
        fontSize: 18,
        color:colors.titles
    },
    subTitle:{
        color:colors.subTitle
    }
})

export default styles