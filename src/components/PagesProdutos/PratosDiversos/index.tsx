import {
  RestauranteStyled,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  DescricaoDoPrato,
  StyledButton,
  CardsContainer
} from './styles'

import HeroProduto from '../Hero'
import BannerProduto from '../BannerProduto'

import API from '../../API/api'
import { useEffect, useState } from 'react'
import Rodape from '../../Rodape'

interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const PratosDiversos = () => {
  const [selectedRestaurante, setSelectedRestaurante] = useState<number | null>(
    null
  )
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])
  const [grabIdFromClick, setGrabIdFromClick] = useState<number>()
  const { restaurantesAPI } = API()

  useEffect(() => {
    // Obtendo o ID do restaurante selecionado do localStorage
    const storedId = localStorage.getItem('selectedRestaurante')

    // Convertendo o ID armazenado para um número e atualizando o estado
    const idNumber = storedId ? Number(storedId) : null
    setSelectedRestaurante(idNumber)

    if (idNumber !== null) {
      // Encontrando o restaurante selecionado com base no ID
      const restaurant = restaurantesAPI.find(
        (restaurante) => restaurante.id === idNumber
      )

      if (restaurant) {
        // Verificando se cardapio é um array antes de atribuir
        if (Array.isArray(restaurant.cardapio)) {
          // Definindo o estado do cardápio com o menu do restaurante
          setCardapio(restaurant.cardapio) // restaurant.cardapio deve ser do tipo CardapioItem[]
        } else {
          console.error('Cardápio não é um array:', restaurant.cardapio)
        }
      } else {
        console.error('Restaurante não encontrado:', idNumber)
      }
    }
  }, [restaurantesAPI])

  return (
    <>
      <HeroProduto />
      <BannerProduto />
      <CardsContainer>
        {cardapio.map((pratos) => (
          <RestauranteStyled key={pratos.id}>
            <Imagem onClick={() => setGrabIdFromClick(pratos.id)}>
              <img src={pratos.foto} alt="Pizza Marguerita" />
            </Imagem>
            <DetalhesDoPrato>
              <NomeDoPrato>{pratos.nome}</NomeDoPrato>
              <DescricaoDoPrato>{pratos.descricao}</DescricaoDoPrato>
              <StyledButton>Adicionar ao carrinho</StyledButton>
              <StyledButton onClick={() => setGrabIdFromClick(pratos.id)}>
                Ver detalhes do prato
              </StyledButton>
            </DetalhesDoPrato>
          </RestauranteStyled>
        ))}
      </CardsContainer>
      <Rodape />
    </>
  )
}

export default PratosDiversos
