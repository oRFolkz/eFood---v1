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
  DarkDestaque,
} from './styles'

import API, { CardapioItem } from '../../API/api'
import { useEffect, useState } from 'react'
import { useCart } from '../../Providers/CartProvider/CartProvider'
import { useRestaurant } from '../../Providers/RestauranteIDProvider/RestauranteIDProvider'

import HeroProduto from '../Hero'
import BannerProduto from '../BannerProduto'
import botaoFechar from '../../imgs/close.png'

export function PratosDiversos() {
  const { restaurantesAPI } = API()
  const { idRestaurante } = useRestaurant()
  const { addToCart } = useCart()

  const [detailIsVisible, setDetailIsVisible] = useState(false)
  const [cardapioDestaque, setCardapioDestaque] = useState<CardapioItem | null>(null)
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])
  const [idPrato, setIdPrato] = useState(Number)

  const OnClickGrabID = (prato: CardapioItem) => {
    setIdPrato(prato.id)

    const cartItem = {
      id: prato.id,
      name: prato.nome,
      price: prato.preco,
      image: prato.foto,
      description: prato.descricao,
      quantity: 0,
    }
    addToCart(cartItem)
  }

  useEffect(() => {
    if (idRestaurante) {
      const restaurant = restaurantesAPI.find(
        (restaurante) => restaurante.id === idRestaurante
      )
      if (restaurant && Array.isArray(restaurant.cardapio)) {
        setCardapio(restaurant.cardapio)

        if (idPrato) {
          const pratoDestaque = restaurant.cardapio.find(
            (prato) => prato.id === idPrato
          )
          if (pratoDestaque) {
            setCardapioDestaque(pratoDestaque)
          }
        }
      }
    }
  }, [idRestaurante, idPrato, restaurantesAPI])

  return (
    <>
      <HeroProduto />
      <BannerProduto />
      <DarkDestaque
        className={detailIsVisible ? 'visible' : ''}
        onClick={() => setDetailIsVisible(false)}
      />
      {cardapioDestaque && (
        <ItemEmDestaque
          className={detailIsVisible ? 'visible' : ''}
          key={cardapioDestaque.id}
        >
          <ImagemDestaque>
            <img src={cardapioDestaque.foto} alt={cardapioDestaque.nome} />
          </ImagemDestaque>
          <DetalhesDoPratoDestaque>
            <NomeDoPratoDestaque>{cardapioDestaque.nome}</NomeDoPratoDestaque>
            <DescricaoDoPratoDestaque>
              {cardapioDestaque.descricao}
            </DescricaoDoPratoDestaque>
            <PorcaoPratoDestaque>
              Serve: {cardapioDestaque.porcao}
            </PorcaoPratoDestaque>
            <BotaoAddCarrinhoDestaque onClick={() =>
              OnClickGrabID(cardapioDestaque)}>
              Adicionar ao carrinho - R${cardapioDestaque.preco.toFixed(2)}
            </BotaoAddCarrinhoDestaque>
          </DetalhesDoPratoDestaque>
          <BotaoFecharDestaque onClick={() => setDetailIsVisible(false)}>
            <img src={botaoFechar} alt="Fechar" />
          </BotaoFecharDestaque>
          <BotaoVoltarDestaque onClick={() => setDetailIsVisible(false)}>
            Voltar
          </BotaoVoltarDestaque>
        </ItemEmDestaque>
      )}
      <CardsContainer className={detailIsVisible ? 'detalhesOpen' : ''}>
        {cardapio.map((pratos) => (
          <RestauranteStyled key={pratos.id}>
            <Imagem
              onClick={() => {
                setIdPrato(pratos.id)
                setDetailIsVisible(true)
              }}
            >
              <img src={pratos.foto} alt={pratos.nome} />
            </Imagem>
            <DetalhesDoPrato>
              <NomeDoPrato>{pratos.nome}</NomeDoPrato>
              <DescricaoDoPrato>{pratos.descricao}</DescricaoDoPrato>
{/*               <StyledButton onClick={() => OnClickGrabID(pratos)}>
                Adicionar ao carrinho
              </StyledButton> */}
               <StyledButton
                onClick={() => {
                  setIdPrato(pratos.id)
                  setDetailIsVisible(true)
                }}
              >
                Adicionar ao carrinho
              </StyledButton>
            </DetalhesDoPrato>
          </RestauranteStyled>
        ))}
      </CardsContainer>
    </>
  )
}

export default PratosDiversos
