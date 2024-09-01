import {
  CardItemNoCarrinho,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  DescricaoDoPrato,
  BotaoRemoverItemCarrinho
} from './styles'

import imagemPrato from '../../../imgs/Pratos/imagemPrato3.png'
import lixeira from '../../../imgs/lixeira.png'

function ItensDentroDoCarrinho() {
  return (
    <CardItemNoCarrinho>
      <Imagem>
        <img src={imagemPrato} alt="" />
      </Imagem>
      <DetalhesDoPrato>
        <NomeDoPrato>Pizza Marguerita</NomeDoPrato>
        <DescricaoDoPrato>R$ 60,90</DescricaoDoPrato>
        <BotaoRemoverItemCarrinho>
          <img src={lixeira} alt="" />
        </BotaoRemoverItemCarrinho>
      </DetalhesDoPrato>
    </CardItemNoCarrinho>
  )
}

export default ItensDentroDoCarrinho
