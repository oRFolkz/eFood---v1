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

function DadosEntrega() {
  return (
    <CardDadosEntrega>
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
      <BotaoContinuar>Continuar com o pagamento</BotaoContinuar>
      <BotaoVoltar>Voltar para o carrinho</BotaoVoltar>
    </CardDadosEntrega>
  )
}

export default DadosEntrega
