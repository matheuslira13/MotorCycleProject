import { Linking,View,Text} from "react-native";
import {styles} from "../LinkButton/styles"

  type VideoListProps = { 
      link: string     
    }
  
    export const LinkVideo = ({link}: VideoListProps) => {
    return (

      <View>
      <Text 
      onPress={() => {Linking.openURL(link)}} >  
      Link do vídeo
      </Text>
      </View>

    )
   }