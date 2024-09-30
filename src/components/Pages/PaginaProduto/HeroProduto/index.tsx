import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  DivHeroProduto,
  TextoHeroRestaurante,
  MaxWidth,
  TextoHeroCarrinho
} from './styles'
import logo from '../../../imgs/Logo/logo.png'
import Carrinho from '../../Carrinho/Carrinho'

function HeroProduto() {
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
            0 produtos(s) no carrinho
          </TextoHeroCarrinho>
        </MaxWidth>
      </DivHeroProduto>
    </>
  )
}

export default HeroProduto
