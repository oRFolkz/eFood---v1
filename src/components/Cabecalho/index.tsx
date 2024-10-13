import { HeroSection, TextoApresentacao, Logo } from './styles'
import logo from '../imgs/Logo/logo.png'
import { Link } from 'react-router-dom'

function Cabecalho() {
  return (
    <HeroSection>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Imagem da Logo" />
        </Link>
      </Logo>
      <TextoApresentacao>
        Viva experiências gastronômicas no conforto da sua casa
      </TextoApresentacao>
    </HeroSection>
  )
}

export default Cabecalho
