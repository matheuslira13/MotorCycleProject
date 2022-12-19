import { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

//tipagem meramente ilustrativa
type HelpUsTipProps = {
  text: string
}

export const HelpUsTipTemplate = ({ text }: HelpUsTipProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}
