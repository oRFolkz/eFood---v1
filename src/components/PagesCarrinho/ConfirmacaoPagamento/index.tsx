import React, { useState } from 'react'
import { useOrderContext } from '../../APIorder/orderApi'
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
  DisplayFlex,
} from './styles'

import { useCart } from '../../Providers/CartProvider/CartProvider'

interface ConfirmacaoPagamentoProps {
  dadosPagamentoVisible: boolean
  setDadosPagamentoVisible: React.Dispatch<React.SetStateAction<boolean>>
  setPedidoRealizadoVisible: React.Dispatch<React.SetStateAction<boolean>>
  setDadosEntregaVisible: React.Dispatch<React.SetStateAction<boolean>>
  onContinue: () => void
}

const ConfirmacaoPagamento: React.FC<ConfirmacaoPagamentoProps> = ({
  dadosPagamentoVisible,
  setDadosPagamentoVisible,
  setPedidoRealizadoVisible,
  setDadosEntregaVisible,
  onContinue,
}) => {
  const { products, delivery, payment, setPayment } = useOrderContext()
  const { total } = useCart()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [codigo, setCodigo] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')

  const handlePaymentSave = () => {
    setPayment((prevPayment) => ({
      ...prevPayment,
      card: {
        ...prevPayment?.card,
        name: nome,
        number: parseInt(numero, 10),
        code: parseInt(codigo, 10),
        expires: {
          month: parseInt(mes, 10),
          year: parseInt(ano, 10),
        },
      },
    }))

    setPedidoRealizadoVisible(false)
    setDadosPagamentoVisible(false)
    onContinue()
    handleFinalizarPedido()
  }

  const handleFinalizarPedido = async () => {
    console.log('Dados do pedido:', {
      products,
      delivery,
      payment,
    })

    const payload = {
      products,
      delivery,
      payment,
    }

    try {
      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      console.log('Response status:', response.status)
      if (!response.ok) {
        throw new Error('Falha ao finalizar o pedido.')
      }

      const data = await response.json()
      localStorage.setItem('apiResponse', JSON.stringify(data.orderId));
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error)
    }
  }

  return (
    <CardDadosPagamento className={dadosPagamentoVisible ? '' : 'visible'}>
      <TextoPagamento>Pagamento - Valor a pagar R$ {total.toFixed(2)} </TextoPagamento>
      <TextoPagamento>Nome no cartão</TextoPagamento>
      <TextaAreaCartao value={nome} onChange={(e) => setNome(e.target.value)} />
      <DisplayFlex>
        <div>
          <TextoPagamento>Número no cartão</TextoPagamento>
          <TextaAreaNumeroCartao value={numero} onChange={(e) => setNumero(e.target.value)} />
        </div>
        <div>
          <TextoPagamento>CVV</TextoPagamento>
          <TextaAreaCVV value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        </div>
      </DisplayFlex>
      <DisplayFlex>
        <div>
          <TextoPagamento>Mês de vencimento</TextoPagamento>
          <TextaAreaMesVencimento value={mes} onChange={(e) => setMes(e.target.value)} />
        </div>
        <div>
          <TextoPagamento>Ano de vencimento</TextoPagamento>
          <TextaAreaAnoVencimento value={ano} onChange={(e) => setAno(e.target.value)} />
        </div>
      </DisplayFlex>
      <BotaoContinuar onClick={handlePaymentSave}>Finalizar Pagamento</BotaoContinuar>
      <BotaoVoltar
        onClick={() => {
          setDadosPagamentoVisible(false)
          setDadosEntregaVisible(true)
        }}
      >
        Voltar para a edição de endereço
      </BotaoVoltar>
    </CardDadosPagamento>
  )
}

export default ConfirmacaoPagamento
