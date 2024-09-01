import {
  RestauranteStyled,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  DescricaoDoPrato,
  BotaoAddCarrinho
} from './styles'

import imagemPrato from '../../../imgs/Pratos/imagemPrato3.png'

function PaginaProduto() {
  return (
    <RestauranteStyled>
      <Imagem>
        <img src={imagemPrato} alt="" />
      </Imagem>
      <DetalhesDoPrato>
        <NomeDoPrato>Pizza Marguerita</NomeDoPrato>
        <DescricaoDoPrato>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </DescricaoDoPrato>
        <BotaoAddCarrinho>Adicionar ao carrinho</BotaoAddCarrinho>
      </DetalhesDoPrato>
    </RestauranteStyled>
  )
}

export default PaginaProduto
