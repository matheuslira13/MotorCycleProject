import { StyleSheet } from "react-native";
import GlobalStyles from "../../utils/styleGlobal";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "3%",
    padding: "3%",
    alignItems: "flex-start",

    justifyContent: "center",
    backgroundColor: GlobalStyles.$primary_black

  },
  title: {
    fontSize: 20,
    color: GlobalStyles.$secondary_white,
  },
  btn: {
    backgroundColor: "#000031",
    borderColor: GlobalStyles.$primary_red,
    color: GlobalStyles.$secondary_white,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderRadius: 120,
    height: 70,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: GlobalStyles.$secondary_white,
    fontWeight: "bold",
    fontSize: 20,
  },
  motoImg: {
    width: 163,
    height: 124,
  },
  motoName: {
    fontSize: 12,
    color: "#DD736C",
  },
  fakeHeader: { // Apagar este style após a criação do verdadeiro Header
    fontSize: 20,
    width: 150,
    height: 180,
  }
});
