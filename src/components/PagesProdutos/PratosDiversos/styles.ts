import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1500px;

  @media (max-width: 650px) {
  }
  @media (max-width: 650px) {
  }
`
export const RestauranteStyled = styled.div`
  color: #ffff;
  background-color: #e66767;
  max-width: 400px;
  position: relative;
  margin: 1rem;
  padding: 2px 0;

  @media (max-width: 650px) {
    width: 60%;
    margin: 1rem;
  }
  @media (max-width: 650px) {
    width: 80%;
  }
`
export const Imagem = styled.div`
  margin: 0.5rem 0.5rem 0 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 480px;
    height: 220px;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      filter: brightness(0.7);
    }
  }
`
export const NomeDoPrato = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 16px;
  line-height: 22px;
  padding: 5px 8px;
`
export const DetalhesDoPrato = styled.div`
  margin: 0rem 0.5rem 0 0.5rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`

export const DescricaoDoPrato = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 0px 8px;
  min-height: 140px;
`
export const StyledButton = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin: 10px 8px;
  padding: 8px 0;
  color: #e66767;
  background-color: #ffff;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`
