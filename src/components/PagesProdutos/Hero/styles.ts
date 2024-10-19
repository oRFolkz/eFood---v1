import styled from 'styled-components'
import heroBackground from '../../imgs/HeroBackground/Vector.png'

export const DivHeroProduto = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-image: url(${heroBackground});
`

export const MaxWidth = styled.div`
  max-width: 1024px;
  margin: auto;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1055px) {
    max-width: 670px;
  }

  @media (max-width: 703px) {
    height: 150px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`

export const TextoHeroRestaurante = styled.button`
  background-color: transparent;
  border: none;
  width: 250px;
  color: #e66767;
  cursor: pointer;
  text-align: start;
  font-weight: 900;
  font-family: Roboto;
  font-size: 18px;
  line-height: 18px;

  @media (max-width: 703px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`
export const TextoHeroCarrinho = styled.p`
  background-color: transparent;
  border: none;
  width: 250px;
  color: #e66767;
  text-align: end;
  font-weight: 900;
  font-family: Roboto;
  font-size: 18px;
  line-height: 18px;

  @media (max-width: 703px) {
    text-align: center;
    margin-top: 1rem;
    cursor: none;
  }
`
