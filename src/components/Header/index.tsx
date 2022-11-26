import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

type HeaderProps = {
  name: string
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.appName}>
        <Text style={styles.appNameText}>Biblia das motos</Text>
      </View>

      <View style={styles.screenName}>
        <Text style={styles.screenNameText}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}
