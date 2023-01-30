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
  gitHubUser?: string

  cardInformationUser: boolean
  name?: string
  urlGithub?: string
  urlPhotoUser?: string
  description?: string
  workCompany?: string
  followers?: string | number

  repoName?: string
  createdAt?: string
  comments?: string
  urlRepoGithub?: string
}

export function CardInformation({
  gitHubUser,
  cardInformationUser,
  name,
  urlGithub,
  urlPhotoUser,
  description,
  workCompany,
  followers,
  repoName,
  createdAt,
  comments,
  urlRepoGithub,
}: CardInformationProps) {
  return (
    <ContainerCardInformation>
      {cardInformationUser === true ? (
        <ContainerUser>
          <img
            src="https://avatars.githubusercontent.com/u/65727437?s=400&u=605b5909d02365bc042bfda2b76f60abee98a792&v=4"
            alt=""
          />
          <ContentUser>
            <HeaderUser>
              <Titles>Arthur Rosch</Titles>

              <a href="">
                GITHUB
                <ArrowSquareOut size={11.25} color="#3294F8" weight="fill" />
              </a>
            </HeaderUser>
            <Description>
              <p>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
                viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                volutpat pulvinar vel mass.
              </p>
            </Description>
            <InformationUser>
              <span>
                <GithubLogo size={18} color="#3A536B" weight="fill" />
                arthur-rosch
              </span>

              <span>
                <House size={18} color="#3A536B" weight="fill" />
                Raion
              </span>

              <span>
                <Users size={18} color="#3A536B" weight="fill" /> 32 Seguidores
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
