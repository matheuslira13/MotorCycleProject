import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "../../components/TextInput/TextInput";
import Example from "../../components/Example/Example";

type LoginProps = {
  text: string;
  setText: (e: any) => void;
  gotoNextScreen: () => void;
};

export default function Login({ text, setText, gotoNextScreen }: LoginProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text>{text}</Text>
      <Text style={styles.title}>LEgal</Text>
      <Example />
      <TextInput
        value={text}
        placeholder={"Digite qualquer coisa"}
        hint={text}
        status={"default"}
        onTextInput={(e) => setText(e.target.value)}
        isDisabled={false}
      />

      <Pressable style={styles.btn} onPress={gotoNextScreen}>
        <Text style={styles.textBtn}>Botao</Text>
      </Pressable>
    </View>
  );
}
