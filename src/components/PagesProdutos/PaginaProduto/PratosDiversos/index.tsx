import imagemPrato from '../../../imgs/Pratos/imagemPrato3.png'
import botaoFechar from '../../../imgs/close.png'

import {
  RestauranteStyled,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  DescricaoDoPrato,
  StyledButton,
  CardsContainer,
  ItemEmDestaque,
  ImagemDestaque,
  DetalhesDoPratoDestaque,
  NomeDoPratoDestaque,
  DescricaoDoPratoDestaque,
  PorcaoPratoDestaque,
  BotaoAddCarrinhoDestaque,
  BotaoFecharDestaque,
  BotaoVoltarDestaque,
  DarkDestaque
} from './styles'

import HeroProduto from '../Hero'
import BannerProduto from '../BannerProduto'

import API from '../../../API/api'
import Rodape from '../../../Rodape'
import { useEffect, useState } from 'react'

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
  const { restaurantesAPI } = API()

  useEffect(() => {
    const storedId = localStorage.getItem('selectedRestaurante')
    const idNumber = storedId ? Number(storedId) : null
    setSelectedRestaurante(idNumber)

    if (idNumber !== null) {
      const restaurant = restaurantesAPI.find(
        (restaurante) => restaurante.id === idNumber
      )

      if (restaurant) {
        if (Array.isArray(restaurant.cardapio)) {
          setCardapio(restaurant.cardapio)
        } else {
          console.error('Cardápio não é um array:', restaurant.cardapio)
        }
      } else {
        console.error('Restaurante não encontrado:', idNumber)
      }
    }
  }, [restaurantesAPI])

  const [detailIsVisible, setDetailIsVisible] = useState(false)

  return (
    <>
      <HeroProduto />
      <BannerProduto />
      <DarkDestaque
        className={detailIsVisible ? 'visible' : ''}
        onClick={() => setDetailIsVisible(false)}
      />
      <ItemEmDestaque className={detailIsVisible ? 'visible' : ''}>
        <ImagemDestaque>
          <img src={imagemPrato} alt="Pizza Marguerita" />
        </ImagemDestaque>
        <DetalhesDoPratoDestaque>
          <NomeDoPratoDestaque>Pizza Marguerita</NomeDoPratoDestaque>
          <DescricaoDoPratoDestaque>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo.
          </DescricaoDoPratoDestaque>
          <PorcaoPratoDestaque>Serve: de 2 a 3 pessoas</PorcaoPratoDestaque>
          <BotaoAddCarrinhoDestaque>
            Adicionar ao carrinho - R$ 60,90
          </BotaoAddCarrinhoDestaque>
        </DetalhesDoPratoDestaque>
        <BotaoFecharDestaque onClick={() => setDetailIsVisible(false)}>
          <img src={botaoFechar} alt="Fechar" />
        </BotaoFecharDestaque>
        <BotaoVoltarDestaque onClick={() => setDetailIsVisible(false)}>
          Voltar
        </BotaoVoltarDestaque>
      </ItemEmDestaque>
      <CardsContainer className={detailIsVisible ? 'detalhesOpen' : ''}>
        {cardapio.map((pratos) => (
          <RestauranteStyled key={pratos.id}>
            <Imagem onClick={() => setDetailIsVisible(true)}>
              <img src={pratos.foto} alt="Pizza Marguerita" />
            </Imagem>
            <DetalhesDoPrato>
              <NomeDoPrato>{pratos.nome}</NomeDoPrato>
              <DescricaoDoPrato>{pratos.descricao}</DescricaoDoPrato>
              <StyledButton>Adicionar ao carrinho</StyledButton>
              <StyledButton onClick={() => setDetailIsVisible(true)}>
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
