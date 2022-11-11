import React, { useState } from "react";
import { Text, View, TextInput as RNTextInput } from "react-native";

import { Colors } from "../../utils/Constants";
import styles from "./styles";

type StatusType = "default" | "success" | "alert" | "error";

interface TextInputProps {
  value: string;
  placeholder: string;
  hint?: string;
  status?: StatusType;
  isPassword?: boolean;
  onTextInput?: (nextValue: any) => void;
}

const TextInput = ({
  value,
  placeholder,
  hint,
  status = "default",
  isPassword = false,
 
  onTextInput,
}: TextInputProps) => {
  const [isFocused, setFocused] = useState(false);
  const { black } = Colors.primary;

  let statusProps = {
      default: isFocused
        ? { style: styles.focused }
        : { style: styles.unfocused },
      success: { style: styles.success },
      alert: { style: styles.alert },
      error: { style: styles.error },
    }[status];

    let statusPropsForHint = {
      default: isFocused
        ? { style: styles.focused }
        : { style: styles.unfocused },
      success: { style: styles.successForHint },
      alert: { style: styles.alertForHint },
      error: { style: styles.errorForHint },
    }[status];
  

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <RNTextInput
          value={value}
          placeholder={hint ? hint:placeholder}
          secureTextEntry={isPassword}
          onTextInput={onTextInput}
          style={[styles.textInput, statusProps.style]}
          placeholderTextColor={statusPropsForHint.style.color}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
    </View>
  );
};

export default TextInput;
