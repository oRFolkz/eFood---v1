import { HeroSection, TextoApresentacao, Logo } from './styles'
import logo from '../imgs/Logo/logo.png'
import { Link } from 'react-router-dom'

function Cabecalho() {
  return (
    <HeroSection>
      <Link to="/">
        <Logo>
          <img src={logo} alt="Imagem da Logo" />
        </Logo>
      </Link>
      <TextoApresentacao>
        Viva experiências gastronômicas no conforto da sua casa
      </TextoApresentacao>
    </HeroSection>
  )
}

export default Cabecalho
