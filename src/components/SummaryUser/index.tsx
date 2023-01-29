import {
  ContainerSummaryUser,
  ContentUser,
  NameAndLinkGitHub,
  Description,
  InformationUser,
} from './styles'

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
          <a href="">GITHUB</a>
        </NameAndLinkGitHub>
        <Description>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </Description>
        <InformationUser>
          <span>arthur-rosch</span>

          <span>Raion</span>

          <span>32 Seguidores</span>
        </InformationUser>
      </ContentUser>
    </ContainerSummaryUser>
  )
}
