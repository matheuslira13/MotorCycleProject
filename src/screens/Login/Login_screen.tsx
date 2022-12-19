import { useLogin } from '../../hooks/useLogin'

import LoginTemplate from '../../templates/Login'

export const LoginScreen = () => {
  const { gotoNextScreen, setText, text } = useLogin()
  return (
    <LoginTemplate
      gotoNextScreen={gotoNextScreen}
      setText={setText}
      text={text}
    />
  )
}
