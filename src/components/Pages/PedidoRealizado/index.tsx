import {
  CardDadosFinalizado,
  TextoFinalizado,
  BotaoVoltar,
  MensagemFinal
} from './styles'

function PedidoRealizado() {
  return (
    <CardDadosFinalizado>
      <TextoFinalizado>Pedido realizado - ORDER_ID</TextoFinalizado>
      <MensagemFinal>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </MensagemFinal>
      <MensagemFinal>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </MensagemFinal>
      <MensagemFinal>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </MensagemFinal>
      <MensagemFinal>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </MensagemFinal>
      <BotaoVoltar>Concluir</BotaoVoltar>
    </CardDadosFinalizado>
  )
}

export default PedidoRealizado
