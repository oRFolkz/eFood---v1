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
  const valorDoProduto = 'R$ 60,90'
  const nomeDoProduto = 'Pizza Marguerita'

  return (
    <CardItemNoCarrinho>
      <Imagem>
        <img src={imagemPrato} alt="" />
      </Imagem>
      <DetalhesDoPrato>
        <NomeDoPrato>{nomeDoProduto}</NomeDoPrato>
        <DescricaoDoPrato>{valorDoProduto}</DescricaoDoPrato>
        <BotaoRemoverItemCarrinho>
          <img src={lixeira} alt="" />
        </BotaoRemoverItemCarrinho>
      </DetalhesDoPrato>
    </CardItemNoCarrinho>
  )
}

export default ItensDentroDoCarrinho
