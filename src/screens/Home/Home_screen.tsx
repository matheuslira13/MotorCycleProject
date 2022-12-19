import { HomeTemplate } from '../../templates'
import { useHome } from '../../hooks/useHome'

export const HomeScreen = () => {
  const { text } = useHome()

  return <HomeTemplate text={text} />
}
