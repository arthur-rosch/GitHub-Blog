import styled from 'styled-components'

export const ContainerCardProject = styled.div`
  width: 26rem;
  height: 16.25rem;

  padding: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;

  border-radius: 10px;
  border: 2px solid transparent;

  background: ${(props) => props.theme['base-post']};

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;

    color: ${(props) => props.theme['base-text']};
  }
  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
export const ContentTitleAndCreatedAt = styled.div`
  margin-bottom: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    height: 4rem;
    width: 17.6875rem;

    font-weight: 700;
    line-height: 160%;
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-title']};
  }
  span {
    font-weight: 400;
    line-height: 160%;
    font-size: 0.875rem;

    color: ${(props) => props.theme['base-span']};
  }
`
