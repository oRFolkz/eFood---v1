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
  return (
    <Dark
      className={carrinhoIsVisible ? 'visible' : ''}
      onClick={() => setCarrinhoIsVisible(false)}
    >
      <Background onClick={(e) => e.stopPropagation()}>
        <ItensDentroDoCarrinho />
        <ValorFinalDiv>
          <ValorTotal>Valor Total : </ValorTotal>
          <ValorDoPedido>R$ 60,90</ValorDoPedido>
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
