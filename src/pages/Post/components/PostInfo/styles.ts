import styled from 'styled-components'

export const ContainerPostInfo = styled.div`
  width: 54rem;
  height: 10.5rem;

  padding: 2rem;
  margin-top: -5rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
`
export const Navigation = styled.div`
  margin-bottom: 1.25rem;

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
export const TitlePost = styled.div`
  margin-bottom: 0.5rem;
  h1 {
    font-weight: 700;
    line-height: 130%;
    font-size: 1.5rem;

    color: ${(props) => props.theme['base-title']};
  }
`
export const InfoPost = styled.div`
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
