import { SearchForm } from './components/SearchForm'
import { SummaryUser } from './components/SummaryUser'
import { ContainerHome, NumberOfPublications } from './styles'

export function Home() {
  return (
    <ContainerHome>
      <SummaryUser />
      <NumberOfPublications>
        <p>Publicação</p>
        <span>0 publicações</span>
      </NumberOfPublications>
      <SearchForm />
    </ContainerHome>
  )
}
