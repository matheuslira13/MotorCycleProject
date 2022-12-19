import { useState } from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import TextInput from '../../components/TextInput/TextInput'
import { Header } from '../../components/Header'

type LoginProps = {
  text: string
  setText: (e: any) => void
  gotoNextScreen: () => void
}

export const LoginTemplate = ({
  text,
  setText,
  gotoNextScreen,
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
      <Pressable style={styles.btn} onPress={gotoNextScreen}>
        <Text style={styles.textBtn}>Botao</Text>
      </Pressable>
    </View>
  )
}
