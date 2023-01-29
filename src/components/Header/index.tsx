import { ContainerHeader } from './styles'
import bannerAndHeaderLogo from '../../assets/Cover.svg'
export function Header() {
  return (
    <ContainerHeader>
      <img src={bannerAndHeaderLogo} alt="" />
    </ContainerHeader>
  )
}
