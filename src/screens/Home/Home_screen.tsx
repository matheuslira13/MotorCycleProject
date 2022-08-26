import { useState } from "react";
import { Text, View } from "react-native";
import ExemploHardParaVcs from "../../components/TextInput/TextInput";

export default function Login() {
  const [text, setText] = useState("");

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
