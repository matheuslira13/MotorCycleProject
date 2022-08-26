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
  isDisabled?: boolean;
  onTextInput?: (nextValue: any) => void;
}

const TextInput = ({
  value,
  placeholder,
  hint,
  status = "default",
  isPassword = false,
  isDisabled = false,
  onTextInput,
}: TextInputProps) => {
  const [isFocused, setFocused] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);
  const { black, blue } = Colors.primary;

  // Decides if the component is rendered with disabled style
  let statusProps;
  if (!isDisabled) {
    statusProps = {
      default: isFocused
        ? { style: styles.focused }
        : { style: styles.unfocused },
      success: { style: styles.success },
      alert: { style: styles.alert },
      error: { style: styles.error },
    }[status];
  } else {
    statusProps = { style: styles.disabled };
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <RNTextInput
          value={value}
          placeholder={placeholder}
          secureTextEntry={isPassword && !displayPassword && !isDisabled}
          onTextInput={onTextInput}
          editable={!isDisabled}
          style={[styles.textInput, isDisabled && statusProps.style]}
          placeholderTextColor={!isDisabled ? black : blue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
      <View style={[styles.spacer, statusProps.style]} />
      <Text style={[styles.hint, statusProps.style]}>{hint}</Text>
    </View>
  );
};

export default TextInput;
