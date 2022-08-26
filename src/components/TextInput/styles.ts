import { StyleSheet } from "react-native";
import GlobalStyles from "../../utils/styleGlobal";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: GlobalStyles.$spacing5,
    paddingVertical: GlobalStyles.$spacing3,
  },
  textInput: {
    flex: 1,
    color: GlobalStyles.$feedback_error,
  },
  inputView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  spacer: {
    marginVertical: GlobalStyles.$spacing2,
    borderBottomWidth: GlobalStyles.$stroke2,
  },
  hint: {
    fontSize: GlobalStyles.$spacing28,
  },
  // Status
  unfocused: {
    color: GlobalStyles.$secondary_white,
    borderColor: GlobalStyles.$secondary_white,
  },
  focused: {
    color: GlobalStyles.$secondary_yellow,
    borderColor: GlobalStyles.$secondary_yellow,
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
  disabled: {
    color: GlobalStyles.$primary_black,
    borderColor: GlobalStyles.$disabled,
    opacity: 0.5,
  },
});

export default styles;
