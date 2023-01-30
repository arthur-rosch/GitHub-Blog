import styled from 'styled-components'

export const ContainerSearchForm = styled.div`
  width: 54rem;
  height: 3.125rem;

  margin-bottom: 3rem;
`
export const Search = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.75rem 1rem 0.75rem 1rem;

  outline: none;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};

  background: ${(props) => props.theme['base-input']};
`
