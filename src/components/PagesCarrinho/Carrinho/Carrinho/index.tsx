import { ReactNode } from 'react'

import {
  Dark,
  Background,
  ValorFinalDiv,
  ValorTotal,
  ValorDoPedido,
  BotaoVoltar,
  BotaoContinuarAsCompras
} from './styles'

import ItensDentroDoCarrinho from '../ItensDentroDoCarrinho'

interface CarrinhoProps {
  carrinhoIsVisible: boolean
  setCarrinhoIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  children?: ReactNode
}

const Carrinho: React.FC<CarrinhoProps> = ({
  carrinhoIsVisible,
  setCarrinhoIsVisible
}) => {
  const valorTotal = 'R$ 60,90'

  return (
    <Dark
      className={carrinhoIsVisible ? 'visible' : ''}
      onClick={() => setCarrinhoIsVisible(false)}
    >
      <Background onClick={(e) => e.stopPropagation()}>
        <ItensDentroDoCarrinho />
        <ValorFinalDiv>
          <ValorTotal>Valor Total : </ValorTotal>
          <ValorDoPedido>{valorTotal}</ValorDoPedido>
        </ValorFinalDiv>
        <BotaoContinuarAsCompras>Continuar a compra</BotaoContinuarAsCompras>
        <BotaoVoltar onClick={() => setCarrinhoIsVisible(false)}>
          Voltar
        </BotaoVoltar>
      </Background>
    </Dark>
  )
}

export default Carrinho
