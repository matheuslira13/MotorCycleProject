import { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

//tipagem meramente ilustrativa
type HelpUsFullNameMotorProps = {
  text: string
}

export const HelpUsFullNameMotorTemplate = ({
  text,
}: HelpUsFullNameMotorProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}
