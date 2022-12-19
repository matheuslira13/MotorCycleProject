import { HelpUsPieceTemplate } from '../../templates'
import { useHelpUsPiece } from '../../hooks/useHelpUsPiece'

export const HelpUsPieceScreen = () => {
  const { text } = useHelpUsPiece()

  return <HelpUsPieceTemplate text={text} />
}
