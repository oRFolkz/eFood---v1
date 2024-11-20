import React, { useEffect } from 'react'
import { ReactNode } from 'react'
import { useCart } from '../../Providers/CartProvider/CartProvider'
import { useOrderContext } from '../../APIorder/orderApi'

import lixeira from '../../imgs/lixeira.png'
import DadosEntrega from '../DadosEntrega'
import PedidoRealizado from '../PedidoRealizado'
import ConfirmacaoPagamento from '../ConfirmacaoPagamento'

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
  Quantidade,
  EmptyCart

} from './styles'

interface CarrinhoProps {
  carrinhoIsVisible: boolean
  setCarrinhoIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  children?: ReactNode
}

const Carrinho: React.FC<CarrinhoProps> = ({
  carrinhoIsVisible,
  setCarrinhoIsVisible,
}) => {
  const { cart, total, removeItemFromCart } = useCart()
  const { setProducts } = useOrderContext()

  useEffect(() => {
    setProducts(cart)
  }, [cart, setProducts])

  const [dadosEntregaVisible, setDadosEntregaVisible] = React.useState(false)
  const [dadosPagamentoVisible, setDadosPagamentoVisible] = React.useState(false)
  const [pedidoRealizadoVisible, setPedidoRealizadoVisible] = React.useState(false)

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
                <img src={cartItem.image} alt={cartItem.name} />
              </Imagem>
              <DetalhesDoPrato>
                <NomeDoPrato>{cartItem.name}</NomeDoPrato>
                <ValorDoPrato>R$: {cartItem.price.toFixed(2)}</ValorDoPrato>
                <Quantidade>Quantidade: <span>{cartItem.quantity}</span></Quantidade>
                <BotaoRemoverItemCarrinho onClick={() => removeItemFromCart(cartItem.id)}>
                  <img src={lixeira} alt="" />
                </BotaoRemoverItemCarrinho>
              </DetalhesDoPrato>
            </CardItemNoCarrinho>
          ))
        ) : ( <EmptyCart>Seu carrinho está vazio...</EmptyCart> ) }
        <ValorFinalDiv>
          <ValorTotal>Valor Total :</ValorTotal>
          <ValorDoPedido>{total < 0 ? 'R$: 0.00' : `R$: ${total.toFixed(2)}`}</ValorDoPedido>
        </ValorFinalDiv>
        {cart.length > 0 && (
          <BotaoContinuarAsCompras onClick={() => setDadosEntregaVisible(true)}>Continuar com a entrega</BotaoContinuarAsCompras>
        )}
        <BotaoVoltar
          onClick={() => {
            setCarrinhoIsVisible(false)
            setDadosEntregaVisible(false)
          }}
        >
          Voltar
        </BotaoVoltar>

        <DadosEntrega
          dadosEntregaVisible={dadosEntregaVisible}
          setDadosEntregaVisible={setDadosEntregaVisible}
          onContinue={() => {
            setDadosEntregaVisible(false)
            setDadosPagamentoVisible(true)
          }}
        />
        <ConfirmacaoPagamento
          dadosPagamentoVisible={dadosPagamentoVisible}
          setDadosPagamentoVisible={setDadosPagamentoVisible}
          setPedidoRealizadoVisible={setPedidoRealizadoVisible}
          setDadosEntregaVisible={setDadosEntregaVisible}
          onContinue={() => {
            setDadosPagamentoVisible(false)
            setPedidoRealizadoVisible(true)
          }}
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

export default Carrinho
