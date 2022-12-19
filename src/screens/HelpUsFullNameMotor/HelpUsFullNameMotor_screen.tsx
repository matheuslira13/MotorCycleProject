import HelpUsFullNameMotorTemplate from '../../templates/HelpUsFullNameMotor'
import { useHelpUsFullNameMotor } from '../../hooks/useHelpUsFullNameMotor'

export const HelpUsFullNameMotorScreen = () => {
  const { text } = useHelpUsFullNameMotor()

  return <HelpUsFullNameMotorTemplate text={text} />
}
