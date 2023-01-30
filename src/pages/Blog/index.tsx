import { SearchForm } from './components/SearchForm'
import { CardProject } from './components/CardProject'
import { CardInformation } from '../../components/CardInformation'

import {
  ContainerBlog,
  NumberOfPublications,
  ContainerCardProject,
} from './styles'

export function Blog() {
  return (
    <ContainerBlog>
      <CardInformation cardInformationUser={true} />

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
