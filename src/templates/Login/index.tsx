import { useState } from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import TextInput from '../../components/TextInput/TextInput'
import { Header } from '../../components/Header'
import { LoginButton } from '../../components/LoginButton'

type LoginProps = {
  text: string
  setText: (e: any) => void
  gotoNextScreen: () => void
}

export const LoginTemplate = ({
  text,
  setText,
}: LoginProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text>{text}</Text>
      <Text style={styles.title}>Bem vindo rapaziada</Text>

      <TextInput
        value={text}
        placeholder={'Digite qualquer coisa'}
        status={'default'}
        onTextInput={(e) => setText(e.target.value)}
        isPassword={true}
      />
      <TextInput
        value={text}
        placeholder={'Digite qualquer coisa'}
        status={'default'}
        onTextInput={(e) => setText(e.target.value)}
        isPassword={true}
      />
      <LoginButton/>
    </View>
  )
}
