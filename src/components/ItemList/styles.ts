import { StatusBar, StyleSheet } from "react-native";
import {GlobalStyles} from "../../utils/styleGlobal"; 

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#00000040',
      height: 30,
      marginVertical: 8,
      marginHorizontal: 16,
      alignContent: "center",
    },
    title: {
      fontSize: 17,
    },
  });