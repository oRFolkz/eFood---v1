import {
  CardDadosFinalizado,
  TextoFinalizado,
  BotaoVoltar,
  MensagemFinal
} from './styles'

import { useCart } from '../../Providers/CartProvider/CartProvider'

interface PedidoRealizadoProps {
  pedidoRealizadoVisible: boolean
  setPedidoRealizadoVisible: React.Dispatch<React.SetStateAction<boolean>>
  setCarrinhoIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const PedidoRealizado: React.FC<PedidoRealizadoProps> = ({
  // eslint-disable-next-line react/prop-types
  pedidoRealizadoVisible,
  // eslint-disable-next-line react/prop-types
  setPedidoRealizadoVisible,
  // eslint-disable-next-line react/prop-types
  setCarrinhoIsVisible
}) => {
  const { emptyCart } = useCart()

  return (
    <CardDadosFinalizado className={pedidoRealizadoVisible ? '' : 'visible'}>
      <TextoFinalizado>Pedido realizado - ID: Teste</TextoFinalizado>
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
      <BotaoVoltar onClick={() => {
        setPedidoRealizadoVisible(false)
        setCarrinhoIsVisible(false)
        emptyCart()
      }}>Concluir</BotaoVoltar>
    </CardDadosFinalizado>
  )
}

export default PedidoRealizado
