import React from 'react'
import { ReactNode } from 'react'

import {
  Dark,
  Background,
  ValorFinalDiv,
  ValorTotal,
  ValorDoPedido,
  BotaoVoltar,
  BotaoContinuarAsCompras,
  CardItemNoCarrinho,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  ValorDoPrato,
  BotaoRemoverItemCarrinho,
  EmptyCart

} from './styles'
import lixeira from '../../imgs/lixeira.png'
import { useCart } from '../../Providers/CartProvider/CartProvider'
import DadosEntrega from '../DadosEntrega'
import PedidoRealizado from '../PedidoRealizado'
import ConfirmacaoPagamento from '../ConfirmacaoPagamento'


interface CarrinhoProps {
  carrinhoIsVisible: boolean
  setCarrinhoIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  children?: ReactNode
}

const Carrinho: React.FC<CarrinhoProps> = ({
  carrinhoIsVisible,
  setCarrinhoIsVisible
}) => {
  const { cart, total } = useCart()
  const [ dadosEntregaVisible, setDadosEntregaVisible ] = React.useState<boolean>(false)
  const [ dadosPagamentoVisible, setDadosPagamentoVisible ] = React.useState<boolean>(false)
  const [ pedidoRealizadoVisible, setPedidoRealizadoVisible ] = React.useState<boolean>(false)


  return (
    <Dark
      className={carrinhoIsVisible ? 'visible' : ''}
      onClick={() => setCarrinhoIsVisible(false)}
    >
      <Background onClick={(e) => e.stopPropagation()}>
        {cart.length > 0 ? (
          cart.map((cartItem) => (
            <CardItemNoCarrinho key={cartItem.id}>
              <Imagem>
                <img src={cartItem.image} alt="" />
              </Imagem>
              <DetalhesDoPrato>
                <NomeDoPrato>{cartItem.name}</NomeDoPrato>
                <ValorDoPrato>R$: {cartItem.price.toFixed(2)}</ValorDoPrato>
                <BotaoRemoverItemCarrinho>
                  <img src={lixeira} alt="" />
                </BotaoRemoverItemCarrinho>
              </DetalhesDoPrato>
            </CardItemNoCarrinho>
          ))
        ) : ( <EmptyCart>Seu carrinho está vazio...</EmptyCart> ) }
        <ValorFinalDiv>
          <ValorTotal>Valor Total :</ValorTotal>
          <ValorDoPedido>R$ {total.toFixed(2)}</ValorDoPedido>
        </ValorFinalDiv>
        {cart.length === 0 ? <p></p> : (
          <BotaoContinuarAsCompras onClick={() => setDadosEntregaVisible(true)}>Continuar a compra</BotaoContinuarAsCompras>
        )}
        <BotaoVoltar
          onClick={() => {
            setCarrinhoIsVisible(false);
            setDadosEntregaVisible(false);
          }}
        >
          Voltar
        </BotaoVoltar>

        <DadosEntrega
          dadosEntregaVisible={dadosEntregaVisible}
          setDadosEntregaVisible={setDadosEntregaVisible}
          setDadosPagamentoVisible={setDadosPagamentoVisible}
        />
        <ConfirmacaoPagamento
          dadosPagamentoVisible={dadosPagamentoVisible}
          setDadosPagamentoVisible={setDadosPagamentoVisible}
          setPedidoRealizadoVisible ={setPedidoRealizadoVisible}
          setDadosEntregaVisible={setDadosEntregaVisible}
        />
        <PedidoRealizado
          pedidoRealizadoVisible={pedidoRealizadoVisible}
          setPedidoRealizadoVisible={setPedidoRealizadoVisible}
          setCarrinhoIsVisible={setCarrinhoIsVisible}
        />
      </Background>
    </Dark>
  )
}

export default Carrinho;
