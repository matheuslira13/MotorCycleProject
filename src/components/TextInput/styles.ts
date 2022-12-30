import { StyleSheet } from "react-native";
import {GlobalStyles} from "../../utils/styleGlobal";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: GlobalStyles.$spacing7,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: GlobalStyles.$stroke2,
    borderLeftWidth: GlobalStyles.$stroke2,
    borderTopWidth: GlobalStyles.$stroke2,
    borderWidth: GlobalStyles.$stroke2,
    backgroundColor: GlobalStyles.$primary_white,
    borderColor: GlobalStyles.$secondary_white,
    paddingLeft: GlobalStyles.$spacing3,
    height:GlobalStyles.$spacing6,
    fontWeight: "500",
  },
  inputView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
   
  },
  // Status
  unfocused: {
    color: GlobalStyles.$primary_black,
  },
  focused: {
    color: GlobalStyles.$secondary_white
  },
  success: {
    color: GlobalStyles.$feedback_success_dark,
    borderColor: GlobalStyles.$feedback_success,
  },
  alert: {
    color: GlobalStyles.$feedback_warning_dark,
    borderColor: GlobalStyles.$feedback_warning,
  },
  error: {
    color: GlobalStyles.$feedback_error_dark,
    borderColor: GlobalStyles.$feedback_error,
  },
  //Hint
  successForHint: {
    color: GlobalStyles.$feedback_success_dark,
  },
  alertForHint: {
    color: GlobalStyles.$feedback_warning_dark,
  },
  errorForHint: {
    color: GlobalStyles.$feedback_error_dark,
  }
});

export default styles;
