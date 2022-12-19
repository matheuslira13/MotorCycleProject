import { useState } from 'react'

export const useDetailsMotorcycle = () => {
  const [text, setText] = useState('Essa aqui é a pagina de DetailsMotorcycle')
  return { text }
}
