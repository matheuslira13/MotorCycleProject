import { Linking,View,Text} from "react-native";
import {styles} from "../LinkButton/styles"
import {GlobalStyles} from "../../utils/styleGlobal"; 

  type VideoListProps = { 
      link: string     
    }
  
    export const LinkButton = ({link}: VideoListProps) => {

      const test= ()=>{
        Linking.openURL(link)
        console.log(GlobalStyles.$primary_blue)
      }
      
    return (
      <View>
      <Text 
      onPress={test} style={styles.font} >  
      Link do vídeo
      </Text>
      </View>

    )
   }