import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import ExemploHardParaVcs from "../../components/TextInput/TextInput";

export default function SelectedMotorcycle() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <ExemploHardParaVcs
        value={text}
        placeholder={""}
        hint={"HEHEHE"}
        status={"default"}
        onTextInput={(e) => setText(e.target.value)}
        isDisabled={false}
      />
    </View>
  );
}
