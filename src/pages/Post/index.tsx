import { ContainerPost } from './styles'
import { CardInformation } from '../../components/CardInformation'

export function Post() {
  return (
    <ContainerPost>
      <CardInformation cardInformationUser={false} />
    </ContainerPost>
  )
}
