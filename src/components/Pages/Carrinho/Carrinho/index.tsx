import {
  Dark,
  Background,
  ValorFinalDiv,
  ValorTotal,
  ValorDoPedido,
  BotaoContinuarAsCompras,
  BotaoEntrega
} from './styles'

import ItensDentroDoCarrinho from '../ItensDentroDoCarrinho'

function Carrinho() {
  return (
    <Dark>
      <Background>
        <ItensDentroDoCarrinho />
        <ItensDentroDoCarrinho />
        <ItensDentroDoCarrinho />
        <ItensDentroDoCarrinho />
        <ValorFinalDiv>
          <ValorTotal>Valor Total : </ValorTotal>
          <ValorDoPedido>R$ 182,70</ValorDoPedido>
        </ValorFinalDiv>
        <BotaoEntrega>Continuar a compra</BotaoEntrega>
        <BotaoContinuarAsCompras>Voltar</BotaoContinuarAsCompras>
      </Background>
    </Dark>
  )
}

export default Carrinho
