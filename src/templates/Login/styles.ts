import { StyleSheet } from "react-native";
import GlobalStyles from "../../utils/styleGlobal";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: GlobalStyles.$spacing40,
    backgroundColor: GlobalStyles.$primary_black,
  },
  title: {
    fontSize: 20,
    color: GlobalStyles.$secondary_white,
  },
  btn: {
    backgroundColor: "#000031",
    borderColor: GlobalStyles.$secondary_yellow,
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
});
