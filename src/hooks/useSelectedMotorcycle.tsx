import { useState } from 'react'

export const useSelectedMotorcycle = () => {
  const [text, setText] = useState('Essa aqui é a pagina de SelectedMotorcycle')

  return { text }
}
