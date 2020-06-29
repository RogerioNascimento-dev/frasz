import {StyleSheet} from 'react-native';
import colors from '../../commons/colors';
import {heightScreemPercent} from '../../commons/functions';

const styles = StyleSheet.create({    
    container:{
        marginBottom:20,
    },
    containerPhrase:{
        backgroundColor: colors.backgroundCard,
        padding:15,
    },
    phrase:{
        fontSize: 15,
        color: colors.texts,
        fontWeight:'300'
    },
    containerFooter:{
        height:heightScreemPercent(0.06),
        backgroundColor:colors.primary,
        flexDirection:'row',
        paddingHorizontal: 20,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    containerFooterBottons:{        
        flexDirection:'row',                 
    }
})

export default styles