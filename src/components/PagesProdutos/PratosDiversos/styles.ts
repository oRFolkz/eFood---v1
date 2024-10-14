import styled from 'styled-components'

export const DarkDestaque = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  cursor: pointer;

  &.visible {
    display: flex;
  }
`

export const ItemEmDestaque = styled.div`
  display: none;
  color: #ffff;
  background-color: #e66767;
  width: 1024px;
  height: 350px;
  align-items: center;
  margin: auto;
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  &.visible {
    display: flex;

    @media (max-width: 640px) {
      display: block;
      height: auto;
    }
  }

  @media (max-width: 1020px) {
    width: 90%;
    margin: auto;
  }

  @media (max-width: 640px) {
    width: 80%;
    margin: auto;
  }
`

export const ImagemDestaque = styled.div`
  margin: 1rem 0 1rem 1rem;
  min-width: 280px;
  height: 320px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 640px) {
    margin: 1rem;
    height: 200px;
    min-width: 0px;

  img {
    width: 100%;
    height: 100%;
  }
`
export const NomeDoPratoDestaque = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 24px;
  line-height: 22px;
  margin: 0 0 0 1rem;

    @media (max-width: 720px) {
    width: 180px;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 0 0 0 1rem;
  }
`
export const DetalhesDoPratoDestaque = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0rem 0rem 0 0.5rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  max-width: 620px;
  margin-right: 1rem;
  height: 300px;

  @media (max-width: 640px) {
    width: 100%;
    margin: 1rem 0 0 0;
  }
`

export const DescricaoDoPratoDestaque = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 1rem 2rem 0 1rem;
  height: 180px;

  @media (max-width: 960px) {
    overflow-y: scroll;
    width: 90%;
    height: 200px;
    margin: 1rem 0 0 1rem;
  }

  @media (max-width: 640px) {
    margin: 1rem 0 0 1rem;
    height: 200px;
  }
`

export const PorcaoPratoDestaque = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 1rem 0 0 1rem;
`

export const BotaoAddCarrinhoDestaque = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin: 0rem 0 0rem 1rem;
  padding: 8px 0 0 0;
  color: #e66767;
  background-color: #ffff;
  width: 250px;
  height: 40px;

  &:hover {
    transform: scale(1.03);
    color: #e66767;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    width: 90%;
    margin: 1rem 0 0.5rem 1rem;
  }
`

export const BotaoFecharDestaque = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 15px;
  right: 25px;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 0.4rem 0.3rem 0.3rem 0.3rem;

  @media (max-width: 640px) {
    display: none;
    top: 5px;
    right: 35px;
  }
`

export const BotaoVoltarDestaque = styled.button`
  display: none;

  @media (max-width: 640px) {
    display: block;
    border: none;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    padding: 6px 0;
    color: #e66767;
    background-color: #ffff;
    width: 220px;
    width: 90%;
    margin: 0rem 0rem 1rem 1rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1500px;

  &.detalhesOpen {
    @media (max-width: 640px) {
      position: fixed;
    }
  }
`
export const RestauranteStyled = styled.div`
  color: #ffff;
  background-color: #e66767;
  max-width: 400px;
  position: relative;
  margin: 1rem;
  padding: 2px 0;

  @media (max-width: 640px) {
    width: 80%;
    margin: 1rem;
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

export const ImagemHomeDestaque = styled.div`
  margin: 0rem;
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
