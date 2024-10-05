import React from 'react'; // Importando React
import botaoFechar from '../../imgs/close.png';
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
} from './styles';

import HeroProduto from '../Hero';
import BannerProduto from '../BannerProduto';
import API from '../../API/api';
import Rodape from '../../Rodape';
import { useEffect, useState } from 'react';

interface CardapioItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

const PratosDiversos = () => {
  const { restaurantesAPI } = API()
  const [selectedRestaurante, setSelectedRestaurante] = useState<number | null>(null)
  const [idPratoDestacado, setIdPratoDestacado] = useState<number | null>(null)
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])
  const [cardapioDestaque, setCardapioDestaque] = useState<CardapioItem | null>(null)
  const [detailIsVisible, setDetailIsVisible] = useState(false)

  const showID = (id: number) => {
    localStorage.setItem('selectedPrato', String(id))
    console.log(`ID Prato ${idPratoDestacado}`)
    console.log(`ID Restaurante ${selectedRestaurante}`)
  }

  useEffect(() => {
    const storedIdRestaurante = localStorage.getItem('selectedRestaurante')
    const idRestaurante = storedIdRestaurante ? Number(storedIdRestaurante) : null
    setSelectedRestaurante(idRestaurante)
    const storedIdPrato = localStorage.getItem('selectedPrato')
    const idPrato = storedIdPrato ? Number(storedIdPrato) : null
    setIdPratoDestacado(idPrato)

    if (idRestaurante !== null) {
      const restaurant = restaurantesAPI.find(
        (restaurante) => restaurante.id === idRestaurante
      )

      if (restaurant) {
        if (Array.isArray(restaurant.cardapio)) {
          setCardapio(restaurant.cardapio)

          if (idPrato !== null) {
            const pratoDestaque = restaurant.cardapio.find(
              (prato) => prato.id === idPrato
            )
            if (pratoDestaque) {
              setCardapioDestaque(pratoDestaque)
            }
          }
        }
      }
    }
  }, [restaurantesAPI, showID])

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
            <BotaoAddCarrinhoDestaque>
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
            <Imagem onClick={() => {
                  showID(pratos.id)
                  setDetailIsVisible(true)
                }}>
              <img src={pratos.foto} alt={pratos.nome} />
            </Imagem>
            <DetalhesDoPrato>
              <NomeDoPrato>{pratos.nome}</NomeDoPrato>
              <DescricaoDoPrato>{pratos.descricao}</DescricaoDoPrato>
              <StyledButton>Adicionar ao carrinho</StyledButton>
              <StyledButton
                onClick={() => {
                  showID(pratos.id)
                  setDetailIsVisible(true)
                }}
              >
                Ver detalhes do prato
              </StyledButton>
            </DetalhesDoPrato>
          </RestauranteStyled>
        ))}
      </CardsContainer>
      <Rodape />
    </>
  );
};

export default PratosDiversos;
