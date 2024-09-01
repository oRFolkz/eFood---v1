import {
  DivHeroProduto,
  TextoHeroRestaurante,
  Logo,
  MaxWidth,
  TextoHeroCarrinho
} from './styles'
import logo from '../imgs/../../../imgs/Logo/logo.png'

function HeroProduto() {
  return (
    <DivHeroProduto>
      <MaxWidth>
        <TextoHeroRestaurante>Restaurantes</TextoHeroRestaurante>
        <Logo>
          <img src={logo} alt="Imagem da Logo" />
        </Logo>
        <TextoHeroCarrinho>0 produtos(s) no carrinho</TextoHeroCarrinho>
      </MaxWidth>
    </DivHeroProduto>
  )
}

export default HeroProduto
