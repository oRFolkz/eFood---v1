import { useState } from 'react'

import {
  ListagemSection,
  ItemEmDestaque,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  DescricaoDoPrato,
  PorcaoPrato,
  BotaoAddCarrinho,
  BotaoFechar,
  BotaoVoltar,
  Dark
} from './styles'
import BannerItaliano from '../BannerProduto'
import PratosDiversos from '../PratosDiversos'
import HeroProduto from '../Hero'
import Rodape from '../../Rodape'

import imagemPrato from '../../../imgs/Pratos/imagemPrato3.png'
import botaoFechar from '../../../imgs/close.png'

function PratoEmDestaque() {
  const [detailIsVisible, setDetailIsVisible] = useState(false)

  return (
    <>
      <HeroProduto />
      <BannerItaliano />
      <ListagemSection>
        <PratosDiversos />
      </ListagemSection>
      <Rodape />
      <Dark className={detailIsVisible ? 'visible' : ''} />
      <ItemEmDestaque className={detailIsVisible ? 'visible' : ''}>
        <Imagem>
          <img src={imagemPrato} alt="Pizza Marguerita" />
        </Imagem>
        <DetalhesDoPrato>
          <NomeDoPrato>Pizza Marguerita</NomeDoPrato>
          <DescricaoDoPrato>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo.
          </DescricaoDoPrato>
          <PorcaoPrato>Serve: de 2 a 3 pessoas</PorcaoPrato>
          <BotaoAddCarrinho>Adicionar ao carrinho - R$ 60,90</BotaoAddCarrinho>
        </DetalhesDoPrato>
        <BotaoFechar onClick={() => setDetailIsVisible(false)}>
          <img src={botaoFechar} alt="Fechar" />
        </BotaoFechar>
        <BotaoVoltar onClick={() => setDetailIsVisible(false)}>
          Voltar
        </BotaoVoltar>
      </ItemEmDestaque>
    </>
  )
}

export default PratoEmDestaque
