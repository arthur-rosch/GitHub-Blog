import styled from 'styled-components'

export const ContainerCardInformation = styled.div``

const ContainerBase = styled.div`
  width: 54rem;

  margin-top: -5rem;
  margin-right: 2rem;

  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
`
export const ContainerPost = styled(ContainerBase)`
  padding: 2rem;
  height: 10.5rem;
`
export const ContainerUser = styled(ContainerBase)`
  height: 13.25rem;

  display: flex;
  align-items: center;
  justify-content: start;

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

const HeaderBase = styled.div`
  margin-right: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 700;
  line-height: 160%;
  font-size: 0.75rem;
  a {
    gap: 0.5rem;
    text-decoration: none;

    display: flex;
    align-items: center;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    color: ${(props) => props.theme.blue};

    &:hover {
      border-top: 1px solid transparent;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`
export const HeaderPost = styled(HeaderBase)`
  margin-bottom: 1.25rem;
`
export const HeaderUser = styled(HeaderBase)`
  margin-top: 2.5rem;
`

export const Titles = styled.h1`
  margin-bottom: 0.5rem;

  font-weight: 700;
  line-height: 130%;
  font-size: 1.5rem;

  color: ${(props) => props.theme['base-title']};
`
export const Description = styled.div`
  margin: 0.5rem 0 1.5rem 0;

  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;

  color: ${(props) => props.theme['base-text']};
`

const InfoBase = styled.div`
  gap: 2rem;
  display: flex;
  align-items: center;
  span {
    gap: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;

    color: ${(props) => props.theme['base-span']};
  }
`
export const InfoPost = styled(InfoBase)`
  color: ${(props) => props.theme['base-span']};
`
export const InformationUser = styled(InfoBase)`
  margin-bottom: 1.9375rem;
  color: ${(props) => props.theme['base-subtitle']};
`
