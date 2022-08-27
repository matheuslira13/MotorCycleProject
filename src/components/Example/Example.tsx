import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type ExampleType = "typea" | "typeb";
interface ExampleProps {
  type?: ExampleType;
  text?: string;
}

const Example: React.FC<ExampleProps> = ({ type = "typea", text }) => {
  const selectedStyle = {
    typea: styles.stylea,
    typeb: styles.styleb,
  }[type];

  return (
    <View style={selectedStyle}>
      <Text>{text}</Text>
    </View>
  );
};

export default Example;

const styles = StyleSheet.create({
  stylea: {
    backgroundColor: "#F00",
    height: 200,
  },
  styleb: {
    backgroundColor: "#0F0",
    height: 200,
  },
});
