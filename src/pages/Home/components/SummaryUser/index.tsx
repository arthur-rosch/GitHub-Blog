import {
  ContainerSummaryUser,
  ContentUser,
  NameAndLinkGitHub,
  Description,
  InformationUser,
} from './styles'
import { ArrowSquareOut, GithubLogo, House, Users } from 'phosphor-react'

export function SummaryUser() {
  return (
    <ContainerSummaryUser>
      <img
        src="https://avatars.githubusercontent.com/u/65727437?s=400&u=605b5909d02365bc042bfda2b76f60abee98a792&v=4"
        alt=""
      />
      <ContentUser>
        <NameAndLinkGitHub>
          <h1>Arthur Rosch</h1>
          <div>
            <a href="">GITHUB</a>
            <ArrowSquareOut size={11.25} color="#3294F8" weight="fill" />
          </div>
        </NameAndLinkGitHub>
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
    </ContainerSummaryUser>
  )
}
