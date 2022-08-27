import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Routes from "../routes/routes";

export const useLogin = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const gotoNextScreen = () => {
    navigation.navigate(Routes.Home as never);
  };
  return {
    setText,
    text,
    gotoNextScreen,
  };
};
