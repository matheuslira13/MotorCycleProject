import { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

//tipagem meramente ilustrativa
type HomeProps = {
  text: string
}

export const HomeTemplate = ({ text }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}
