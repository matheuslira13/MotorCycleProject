import { useState } from 'react'

export const useHelpUsFullNameMotor = () => {
  const [text, setText] = useState(
    'Essa aqui é a pagina de HelpUsFullNameMotor'
  )

  return { text }
}
