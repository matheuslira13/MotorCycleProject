import { StyleSheet } from "react-native";
import GlobalStyles from "../../utils/styleGlobal";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        justifyContent:'center',
        alignContent : 'space-between',
        flexDirection:'row',
        marginHorizontal:12
    },
    appName:{
        width:50,
        justifyContent:'center'
    },
    appNameText:{
        textAlign:"left",
        fontSize:13,
        
    },
    screenName:{    
        flex:1,
        height:60,
     
        justifyContent:'center'
    },
    screenNameText:{
        textAlign:'center',
        fontSize:20,
        color:'red',
        fontWeight:'500'
    },
    iconContainer:{
        width:50,
        justifyContent:'center',
        alignItems:'center',
  
    },
    iconText:{
        fontWeight:'900',
        
        marginBottom:0,
        padding:0,
        
    }
})