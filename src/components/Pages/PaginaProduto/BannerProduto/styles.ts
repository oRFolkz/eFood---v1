import styled from 'styled-components'
import imgProduto from '../../../imgs/Pratos/imagemPrato2.png'

export const Banner = styled.div`
  background-image: url(${imgProduto});
  background-size: cover;
  width: 100%;
  height: 280px;
  padding: 0;
  margin: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
`

export const MaxWidth = styled.div`
  max-width: 1200px;
  margin: auto;
`

export const TagDoProduto = styled.p`
  padding: 2rem 0 0 0;
  margin: 0;
  color: #ffff;
  font: Roboto;
  font-weight: 100;
  font-size: 32px;
`

export const NomeDoProduto = styled.h1`
  padding: 8rem 0 0 0;
  margin: 0;
  color: #ffff;
  font: Roboto;
  font-weight: 900;
  font-size: 32px;
`
