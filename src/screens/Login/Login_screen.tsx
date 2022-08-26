import { useLogin } from "../../hooks/useLogin";

import LoginTemplate from "../../templates/Login/Login";

const LoginScreen = () => {
  const { gotoNextScreen, setText, text } = useLogin();
  return (
    <LoginTemplate
      gotoNextScreen={gotoNextScreen}
      setText={setText}
      text={text}
    />
  );
};

export default LoginScreen;
