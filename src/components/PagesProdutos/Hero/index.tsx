import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  DivHeroProduto,
  TextoHeroRestaurante,
  MaxWidth,
  TextoHeroCarrinho
} from './styles'

import logo from '../../imgs/Logo/logo.png'
import Carrinho from '../../PagesCarrinho/Carrinho'
import { useCart } from '../../Providers/CartProvider/CartProvider'

function HeroProduto() {
  const { cart } = useCart()
  const itensNoCarrinho = cart.length
  const [carrinhoIsVisible, setCarrinhoIsVisible] = useState(false)

  return (
    <>
      <Carrinho
        carrinhoIsVisible={carrinhoIsVisible}
        setCarrinhoIsVisible={setCarrinhoIsVisible}
      ></Carrinho>
      <DivHeroProduto>
        <MaxWidth>
          <Link to="/">
            <TextoHeroRestaurante>Restaurantes</TextoHeroRestaurante>
          </Link>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <TextoHeroCarrinho onClick={() => setCarrinhoIsVisible(true)}>
            {itensNoCarrinho} produtos(s) no carrinho
          </TextoHeroCarrinho>
        </MaxWidth>
      </DivHeroProduto>
    </>
  )
}

export default HeroProduto
