import {
  ContainerCardInformation,
  ContainerUser,
  ContentUser,
  HeaderUser,
  Description,
  InformationUser,
  ContainerPost,
  HeaderPost,
  Titles,
  InfoPost,
} from './styles'

import {
  ArrowSquareOut,
  GithubLogo,
  ArrowLeft,
  Calendar,
  ChatCircle,
  House,
  Users,
} from 'phosphor-react'

interface CardInformationProps {
  gitHubUser: string

  informationRepo?: {
    repoName: string
    createdAt: string
    comments: string
    urlRepoGithub: string
  }
  informationUser?: {
    followers: number
    name: string
    company: string | null
    html_url: string
    avatar_url: string
    bio: string | null
    login: string
  }
}

export function CardInformation({
  gitHubUser,
  informationRepo,
  informationUser,
}: CardInformationProps) {
  return (
    <ContainerCardInformation>
      {informationUser ? (
        <ContainerUser>
          <img
            src="https://avatars.githubusercontent.com/u/65727437?s=400&u=605b5909d02365bc042bfda2b76f60abee98a792&v=4"
            alt=""
          />
          <ContentUser>
            <HeaderUser>
              <Titles>{informationUser.name}</Titles>

              <a href={informationUser.html_url}>
                GITHUB
                <ArrowSquareOut size={11.25} color="#3294F8" weight="fill" />
              </a>
            </HeaderUser>
            <Description>
              <p>{informationUser.bio}</p>
            </Description>
            <InformationUser>
              <span>
                <GithubLogo size={18} color="#3A536B" weight="fill" />
                {informationUser.login}
              </span>

              <span>
                <House size={18} color="#3A536B" weight="fill" />
                {informationUser.company}
              </span>

              <span>
                <Users size={18} color="#3A536B" weight="fill" />{' '}
                {informationUser.followers} Seguidores
              </span>
            </InformationUser>
          </ContentUser>
        </ContainerUser>
      ) : (
        <ContainerPost>
          <HeaderPost>
            <a href="">
              <ArrowLeft size={12} color="#3294F8" weight="fill" /> VOLTAR
            </a>

            <a href="">
              VER NO GITHUB
              <ArrowSquareOut size={12} color="#3294F8" weight="fill" />
            </a>
          </HeaderPost>

          <Titles>JavaScript data types and data structures</Titles>

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
              <ChatCircle size={18} color="#3A536B" weight="fill" />5
              comentários
            </span>
          </InfoPost>
        </ContainerPost>
      )}
    </ContainerCardInformation>
  )
}
