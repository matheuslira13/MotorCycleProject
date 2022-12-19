import { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

//tipagem meramente ilustrativa
type DetailsMotorcycleProps = {
  text: string
}

export const DetailsMotorcycleTemplate = ({ text }: DetailsMotorcycleProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}
