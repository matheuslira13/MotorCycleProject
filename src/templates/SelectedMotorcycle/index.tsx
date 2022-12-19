import { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

//tipagem meramente ilustrativa
type SelectedMotorcycleProps = {
  text: string
}

export const SelectedMotorcycleTemplate = ({
  text,
}: SelectedMotorcycleProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}
