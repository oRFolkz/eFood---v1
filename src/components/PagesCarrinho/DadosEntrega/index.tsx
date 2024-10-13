import React from 'react'
import {
  CardDadosEntrega,
  TextoEntrega,
  TextaAreaNome,
  TextaAreaEndereco,
  TextaAreaCidade,
  TextaAreaCEP,
  TextaAreaNumero,
  TextaAreaComplemento,
  BotaoContinuar,
  BotaoVoltar,
  DisplayFlex,
  TextAlign
} from './styles'

interface DadosEntregaProps {
  dadosEntregaVisible: boolean
  setDadosEntregaVisible: React.Dispatch<React.SetStateAction<boolean>>
  setDadosPagamentoVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const DadosEntrega: React.FC<DadosEntregaProps> = ({
  dadosEntregaVisible,
  setDadosEntregaVisible,
  setDadosPagamentoVisible
}) => {
  return (
    <CardDadosEntrega className={dadosEntregaVisible ? '' : 'visible'}>
      <TextoEntrega>Entrega</TextoEntrega>
      <TextoEntrega>Quem irá receber</TextoEntrega>
      <TextaAreaNome></TextaAreaNome>
      <TextoEntrega>Endereço</TextoEntrega>
      <TextaAreaEndereco></TextaAreaEndereco>
      <TextoEntrega>Cidade</TextoEntrega>
      <TextaAreaCidade></TextaAreaCidade>
      <DisplayFlex>
        <div>
          <TextoEntrega>CEP</TextoEntrega>
          <TextaAreaCEP></TextaAreaCEP>
        </div>
        <div>
          <TextoEntrega>Número</TextoEntrega>
          <TextAlign>
            <TextaAreaNumero></TextaAreaNumero>
          </TextAlign>
        </div>
      </DisplayFlex>
      <TextoEntrega>Complemento</TextoEntrega>
      <TextaAreaComplemento></TextaAreaComplemento>
      <BotaoContinuar onClick={() => {
        setDadosEntregaVisible(false)
        setDadosPagamentoVisible(true)
        }}>Continuar com o pagamento</BotaoContinuar>
      <BotaoVoltar onClick={() => {
        setDadosEntregaVisible(false)
        }}>Voltar para o carrinho</BotaoVoltar>
    </CardDadosEntrega>
  )
}

export default DadosEntrega
