import React, { useState } from 'react'
import { useOrderContext } from '../../APIorder/orderApi'

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
  TextAlign,
} from './styles'

interface DadosEntregaProps {
  dadosEntregaVisible: boolean
  setDadosEntregaVisible: React.Dispatch<React.SetStateAction<boolean>>
  onContinue: () => void
}

const DadosEntrega: React.FC<DadosEntregaProps> = ({
  dadosEntregaVisible,
  setDadosEntregaVisible,
  onContinue,
}) => {
  const { setDelivery } = useOrderContext()

  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  const handleAddressSave = () => {
    setDelivery({
      receiver: nome,
      address: {
        description: endereco,
        city: cidade,
        zipCode: parseInt(cep),
        number: parseInt(numero),
        complement: complemento || undefined,
      },
    })

    onContinue()
  }

  if (!dadosEntregaVisible) return null

  return (
    <CardDadosEntrega className={dadosEntregaVisible ? '' : 'visible'}>
      <TextoEntrega>Entrega</TextoEntrega>
      <TextoEntrega>Quem irá receber</TextoEntrega>
      <TextaAreaNome value={nome} onChange={(e) => setNome(e.target.value)} />
      <TextoEntrega>Endereço</TextoEntrega>
      <TextaAreaEndereco
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
      <TextoEntrega>Cidade</TextoEntrega>
      <TextaAreaCidade value={cidade} onChange={(e) => setCidade(e.target.value)} />
      <DisplayFlex>
        <div>
          <TextoEntrega>CEP</TextoEntrega>
          <TextaAreaCEP value={cep} onChange={(e) => setCep(e.target.value)} />
        </div>
        <div>
          <TextoEntrega>Número</TextoEntrega>
          <TextAlign>
            <TextaAreaNumero value={numero} onChange={(e) => setNumero(e.target.value)} />
          </TextAlign>
        </div>
      </DisplayFlex>
      <TextoEntrega>Complemento</TextoEntrega>
      <TextaAreaComplemento
        value={complemento}
        onChange={(e) => setComplemento(e.target.value)}
      />
      <BotaoContinuar onClick={handleAddressSave}>Continuar com o pagamento</BotaoContinuar>
      <BotaoVoltar onClick={() => setDadosEntregaVisible(false)}>
        Voltar para o carrinho
      </BotaoVoltar>
    </CardDadosEntrega>
  )
}

export default DadosEntrega
