import styled from 'styled-components'
import heroBackground from '../../../imgs/HeroBackground/Vector.png'

export const DivHeroProduto = styled.div`
  width: 100%;
  background-image: url(${heroBackground});
`

export const MaxWidth = styled.div`
  max-width: 1200px;
  height: 200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  width: 125px;
  height: 60px;
  cursor: pointer;
`

export const TextoHeroRestaurante = styled.p`
  width: 250px;
  color: #e66767;
  cursor: pointer;
  text-align: start;
  font-weight: 900;
  font-family: Roboto;
  font-size: 18px;
  line-height: 18px;
`
export const TextoHeroCarrinho = styled.p`
  width: 250px;
  color: #e66767;
  cursor: pointer;
  text-align: end;
  font-weight: 900;
  font-family: Roboto;
  font-size: 18px;
  line-height: 18px;
`
