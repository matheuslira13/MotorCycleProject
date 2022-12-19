import { useState } from 'react'
import { Text, View } from 'react-native'
import { SelectedMotorcycleTemplate } from '../../templates'
import { useSelectedMotorcycle } from '../../hooks'

export const SelectedMotorcycleScreen = () => {
  const { text } = useSelectedMotorcycle()

  return <SelectedMotorcycleTemplate text={text} />
}
