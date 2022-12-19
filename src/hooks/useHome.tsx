import { useState } from 'react'

export const useHome = () => {
  const [text, setText] = useState('Essa aqui é a pagina de Home')
  return { text }
}
