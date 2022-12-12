import { StyleSheet } from "react-native";
import GlobalStyles from "../../utils/styleGlobal";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: "3%",
    padding: "3%",
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: GlobalStyles.$primary_black,

  },
  motoImg: {
    width: 163,
    height: 124,
    margin: 10
  },
  motoName: {
    fontSize: 12,
    color: "#DD736C",
    padding: 10,
    marginTop: -15
  },
  fakeHeader: { // Apagar este style após a criação do verdadeiro Header
    fontSize: 20,
    width: 150,
    height: 180,
  }
});
