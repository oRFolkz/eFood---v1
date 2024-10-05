import styled from 'styled-components'
import imgProduto from '../../../imgs/Pratos/imagemPrato2.png'

export const Banner = styled.div`
  background-image: url(${imgProduto});
  background-size: cover;
  width: 100%;
  height: 220px;
  padding: 0;
  margin: 7rem 0 0 0;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
  @media (max-width: 700px) {
    margin: 12rem 0 0 0;
  }
`

export const MaxWidth = styled.div`
  max-width: 1200px;
  margin: auto;

  @media (max-width: 1200px) {
    margin: 0 2rem;
  }
`

export const TagDoProduto = styled.p`
  padding: 2rem 0 0 0;
  margin: 0;
  color: #ffff;
  font-family: Roboto;
  font-weight: 100;
  font-size: 32px;
`

export const NomeDoProduto = styled.h1`
  padding: 4rem 0 0 0;
  margin: 0;
  color: #ffff;
  font-family: Roboto;
  font-weight: 900;
  font-size: 32px;

  @media (max-width: 400px) {
    padding: 2rem 0 0 0;
  }
`
