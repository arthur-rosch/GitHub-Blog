import { ContainerPost } from './styles'
import { CardInformation } from '../../components/CardInformation'

export function Post() {
  return (
    <ContainerPost>
      <CardInformation
        gitHubUser="arthur-rosch"
        informationRepo={{
          comments: 'comments',
          createdAt: 'sadasdas',
          repoName: 'arthur-rosch',
          urlRepoGithub: 'asdasdas',
        }}
      />
    </ContainerPost>
  )
}
