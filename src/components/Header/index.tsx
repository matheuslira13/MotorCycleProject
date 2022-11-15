import {View,Text} from 'react-native'
import {styles} from './styles'

type HeaderProps = {
    name:string
}

export const Header = ({name}:HeaderProps)=>{
    return (
        <View style={styles.container}>

            <View style={styles.appName}>
            <Text style={styles.appNameText}>
                Biblia das motos
            </Text>
            </View>

            <View style={styles.screenName}>
                <Text style={styles.screenNameText}>
                {name}
                </Text>
            </View>

            <View style={styles.iconContainer}>
                <Text style={styles.iconText}>
                    _
                </Text>
                <Text style={styles.iconText}>
                    _
                </Text>
                <Text style={styles.iconText}>
                    _
                </Text>
            </View>
            
        </View>
    )
}