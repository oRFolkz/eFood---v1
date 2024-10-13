import React from 'react'
import {
  CardDadosPagamento,
  TextoPagamento,
  TextaAreaCartao,
  TextaAreaNumeroCartao,
  TextaAreaCVV,
  TextaAreaMesVencimento,
  TextaAreaAnoVencimento,
  BotaoContinuar,
  BotaoVoltar,
  DisplayFlex
} from './styles'


import { useCart } from '../../Providers/CartProvider/CartProvider'

interface ConfirmacaoPagamentoProps {
  dadosPagamentoVisible: boolean;
  setDadosPagamentoVisible: React.Dispatch<React.SetStateAction<boolean>>
  setPedidoRealizadoVisible: React.Dispatch<React.SetStateAction<boolean>>
  setDadosEntregaVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmacaoPagamento: React.FC<ConfirmacaoPagamentoProps> = ({
  dadosPagamentoVisible,
  setDadosPagamentoVisible,
  setPedidoRealizadoVisible,
  setDadosEntregaVisible
}) => {
  const { total }= useCart()
  return (
    <CardDadosPagamento className={dadosPagamentoVisible ? '': 'visible'}>
      <TextoPagamento>Pagamento - Valor a pagar R$ {total.toFixed(2)} </TextoPagamento>
      <TextoPagamento>Nome no cartão</TextoPagamento>
      <TextaAreaCartao></TextaAreaCartao>
      <DisplayFlex>
        <div>
          <TextoPagamento>Número no cartão</TextoPagamento>
          <TextaAreaNumeroCartao></TextaAreaNumeroCartao>
        </div>
        <div>
          <TextoPagamento>CVV</TextoPagamento>
          <TextaAreaCVV></TextaAreaCVV>
        </div>
      </DisplayFlex>
      <DisplayFlex>
        <div>
          <TextoPagamento>Mês de vencimento</TextoPagamento>
          <TextaAreaMesVencimento></TextaAreaMesVencimento>
        </div>
        <div>
          <TextoPagamento>Ano de vencimento</TextoPagamento>
          <TextaAreaAnoVencimento></TextaAreaAnoVencimento>
        </div>
      </DisplayFlex>
      <BotaoContinuar onClick={() => {
        setDadosPagamentoVisible(false)
        setPedidoRealizadoVisible(true)
        }}>
        Finalizar Pagamento</BotaoContinuar>
      <BotaoVoltar onClick={() => {
        setDadosPagamentoVisible(false)
        setDadosEntregaVisible(true)
        }}>Voltar para a edição de endereço</BotaoVoltar>
    </CardDadosPagamento>
  )
}

export default ConfirmacaoPagamento
