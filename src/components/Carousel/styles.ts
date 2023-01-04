import { StyleSheet } from "react-native";
import GlobalStyles from "../../utils/styleGlobal";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.$primary_black,
  },
  image: {
    flex:1,
    width: 360,
    margin: 15,
    marginTop: 120,
  },
  namePart: {
    marginTop: 120,
    top: -100,
    fontSize: GlobalStyles.$typography23,
    color: GlobalStyles.$primary_red,
    width: 347,
    height: 99,
    margin: 15,
  },
  descriptionPart: {
    top: -170,
    fontSize: GlobalStyles.$typography16,
    color: GlobalStyles.$primary_white,
    margin: 15,
    width: 351,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  circlesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});