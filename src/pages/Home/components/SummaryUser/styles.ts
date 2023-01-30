import styled from 'styled-components'

export const ContainerSummaryUser = styled.div`
  width: 54rem;
  height: 13.25rem;
  margin-top: -5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    margin-right: 2rem;
    margin-left: 2.5rem;

    border-radius: 8px;
  }
`
export const ContentUser = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const NameAndLinkGitHub = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }
  div {
    margin-right: 2rem;

    a {
      margin-right: 0.5rem;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;

      text-decoration: none;

      color: ${(props) => props.theme.blue};
    }
    &:hover {
      border-top: 1px solid transparent;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`
export const Description = styled.div`
  margin: 0.5rem 0 1.5rem 0;

  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;

  color: ${(props) => props.theme['base-text']};
`
export const InformationUser = styled.div`
  height: 1.625rem;
  width: 24.5625rem;
  margin-bottom: 1.9375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme['base-subtitle']};
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`
