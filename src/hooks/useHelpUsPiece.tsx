import { useState } from 'react'

export const useHelpUsPiece = () => {
  const [text, setText] = useState('Essa aqui é a pagina de HelpUsPiece')

  return { text }
}
