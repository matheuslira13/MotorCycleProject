import { StyleSheet } from "react-native";
import GlobalStyles from "../../utils/styleGlobal";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   backgroundColor:GlobalStyles.$primary_black

  },
  title: {
    fontSize: 20,
    color: GlobalStyles.$secondary_white,
  },
});
