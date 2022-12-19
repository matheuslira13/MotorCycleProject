import { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

//tipagem meramente ilustrativa
type HelpUsPieceProps = {
  text: string
}

export const HelpUsPieceTemplate = ({ text }: HelpUsPieceProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}
