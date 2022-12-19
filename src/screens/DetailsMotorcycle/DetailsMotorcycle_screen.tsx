import DetailsMotorcycleTemplate from '../../templates/DetailsMotorcycle'
import { useDetailsMotorcycle } from '../../hooks/useDetailsMotorcycle'

export const DetailsMotorcycleScreen = () => {
  const { text } = useDetailsMotorcycle()
  return <DetailsMotorcycleTemplate text={text} />
}
