import { RodapeSection, IconesRedesSociais, TextoRodape, Logo } from './styles'
import logo from '../imgs/Logo/logo.png'
import instagram from '../imgs/redes/instagram.png'
import facebook from '../imgs/redes/facebook.png'
import twitter from '../imgs/redes/twitter.png'

function Rodape() {
  return (
    <RodapeSection>
      <Logo to="/">
        <img src={logo} alt="Imagem da Logo" />
      </Logo>
      <IconesRedesSociais>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </IconesRedesSociais>
      <TextoRodape>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextoRodape>
    </RodapeSection>
  )
}

export default Rodape
