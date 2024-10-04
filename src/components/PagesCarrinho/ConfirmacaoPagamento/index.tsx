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

function ConfirmacaoPagamento() {
  return (
    <CardDadosPagamento>
      <TextoPagamento>Pagamento - Valor a pagar R$ 190,90 </TextoPagamento>
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
      <BotaoContinuar>Finalizar Pagamento</BotaoContinuar>
      <BotaoVoltar>Voltar para a edição de endereço</BotaoVoltar>
    </CardDadosPagamento>
  )
}

export default ConfirmacaoPagamento
