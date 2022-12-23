import { StyleSheet } from "react-native";
import GlobalStyles from "../../utils/styleGlobal";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF473A",
    height: 42,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: GlobalStyles.$primary_white,
    fontSize: GlobalStyles.$typography13,
  },
});