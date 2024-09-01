import styled from 'styled-components'

export const RestauranteStyled = styled.div`
  color: #ffff;
  background-color: #e66767;
  width: 1024px;
  height: 320px;
  display: flex;
  align-items: center;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media (max-width: 1020px) {
    width: 90%;
    margin: auto;
  }

  @media (max-width: 425px) {
    width: 60%;
    margin: auto;
    display: block;
    height: auto;
  }
`

export const Dark = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.8);
`

export const Imagem = styled.div`
  margin: 1rem 0 1rem 1rem;
  min-width: 280px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 425px) {
    width: 90%;
    margin: 3rem auto 0 auto;
    display: block;
    height: 400px;
  }
`
export const NomeDoPrato = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 0 1rem;

  @media (max-width: 425px) {
    width: 100%;
    margin: 1rem 0 0 1rem;
  }
`
export const DetalhesDoPrato = styled.div`
  margin: 0rem 0rem 0 0.5rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  max-width: 620px;
  margin-right: 1rem;

  @media (max-width: 425px) {
    width: 100%;
    margin: 1rem 0 0 1rem;
  }
`

export const DescricaoDoPrato = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 1rem 0 0 1rem;

  @media (max-width: 960px) {
    overflow-y: scroll;
    width: 90%;
    height: 150px;
  }
  @media (max-width: 425px) {
    width: 90%;
    margin: 1rem 0 0 1rem;
  }
`

export const PorcaoPrato = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 1rem 0 0 1rem;
`

export const BotaoAddCarrinho = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin: 0.5rem 0 0rem 1rem;
  padding: 5px 0;
  color: #e66767;
  background-color: #ffff;
  width: 220px;

  &:hover {
    transform: scale(1.03);
    color: #e66767;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    width: 90%;
    margin: 1rem 0 2rem 1rem;
  }
`

export const BotaoFechar = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1.8rem;
  cursor: pointer;
  width: 16px;
  height: 16px;

  @media (max-width: 425px) {
    top: 5px;
    right: 35px;
  }
`
