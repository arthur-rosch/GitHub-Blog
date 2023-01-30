import { ContainerPostInfo, Navigation, TitlePost, InfoPost } from './styles'
import {
  ArrowSquareOut,
  GithubLogo,
  ArrowLeft,
  Calendar,
  ChatCircle,
} from 'phosphor-react'
export function PostInfo() {
  return (
    <ContainerPostInfo>
      <Navigation>
        <a href="">
          <ArrowLeft size={12} color="#3294F8" weight="fill" /> VOLTAR
        </a>

        <a href="">
          VER NO GITHUB
          <ArrowSquareOut size={12} color="#3294F8" weight="fill" />
        </a>
      </Navigation>
      <TitlePost>
        <h1>JavaScript data types and data structures</h1>
      </TitlePost>
      <InfoPost>
        <span>
          <GithubLogo size={18} color="#3A536B" weight="fill" />
          arthur-rosch
        </span>
        <span>
          <Calendar size={18} color="#3A536B" weight="fill" />
          Há 1 dia
        </span>
        <span>
          <ChatCircle size={18} color="#3A536B" weight="fill" />5 comentários
        </span>
      </InfoPost>
    </ContainerPostInfo>
  )
}
