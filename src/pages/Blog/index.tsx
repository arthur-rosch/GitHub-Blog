import { CardProject } from './components/CardProject'
import { SearchForm } from './components/SearchForm'
import { SummaryUser } from './components/SummaryUser'
import {
  ContainerBlog,
  NumberOfPublications,
  ContainerCardProject,
} from './styles'

export function Blog() {
  return (
    <ContainerBlog>
      <SummaryUser />
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
