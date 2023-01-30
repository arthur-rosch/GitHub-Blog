import styled from 'styled-components'

export const ContainerBlog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const NumberOfPublications = styled.div`
  width: 54rem;
  height: 3.125rem;
  margin-top: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 700;
    line-height: 160%;
    font-size: 1.125rem;
  }

  span {
    font-weight: 400;
    line-height: 160%;
    font-size: 0.875rem;
  }
`

export const ContainerCardProject = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
