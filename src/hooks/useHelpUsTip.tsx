import { useState } from 'react'

export const useHelpUsTip = () => {
  const [text, setText] = useState('Essa aqui é a pagina de HelpUsTip')

  return { text }
}
