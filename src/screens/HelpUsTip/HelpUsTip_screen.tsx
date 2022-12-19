import { HelpUsTipTemplate } from '../../templates'
import { useHelpUsTip } from '../../hooks/useHelpUsTip'

export const HelpUsTipScreen = () => {
  const { text } = useHelpUsTip()

  return <HelpUsTipTemplate text={text} />
}
