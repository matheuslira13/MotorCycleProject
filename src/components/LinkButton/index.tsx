import { Linking,View,Text} from "react-native";
import {styles} from "../LinkButton/styles"


/*
  const [url, setUrl] = useState('');
  const [link, setLink] = useState(false) */

  type VideoListProps = { 
      link: string     
    }
  
  const mock = [
    {
      link: 'https://www.youtube.com/watch?v=FJ3UIp7GN6k',
    }
  ]

  
 

    const LinkVideo = ({link}: VideoListProps) => {
    return (

      <View>
      <Text 
      onPress={() => {Linking.openURL(link)}} >  
      Link do vídeo
      </Text>
      </View>

    )
   }

   export default LinkVideo
   