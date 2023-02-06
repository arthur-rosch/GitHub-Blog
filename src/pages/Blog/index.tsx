import { SearchForm } from './components/SearchForm'
import { CardProject } from './components/CardProject'
import { CardInformation } from '../../components/CardInformation'

import {
  ContainerBlog,
  NumberOfPublications,
  ContainerCardProject,
} from './styles'
import { useContext } from 'react'
import { GitHubContext } from '../../context/GitHubContext'

export function Blog() {
  const { user } = useContext(GitHubContext)
  return (
    <ContainerBlog>
      <CardInformation
        gitHubUser="arthur-rosch"
        informationUser={{
          followers: user.followers,
          name: user.name,
          company: user.company,
          bio: user.bio,
          html_url: user?.html_url,
          avatar_url: user?.avatar_url,
          login: user.login,
        }}
      />

      <div>
        <NumberOfPublications>
          <p>Publicação</p>
          <span>0 publicações</span>
        </NumberOfPublications>
        <SearchForm />
        <ContainerCardProject>
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </ContainerCardProject>
      </div>
    </ContainerBlog>
  )
}
