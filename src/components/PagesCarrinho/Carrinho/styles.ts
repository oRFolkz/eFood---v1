import styled from 'styled-components'

export const Dark = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 20;
  display: none;

  &.visible {
    display: flex;
  }
`

export const Background = styled.div`
  background-color: #e66767;
  width: 360px;
  height: 100%;
  margin: auto;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;

  @media (max-width: 500px) {
    width: 250px;
  }
`

export const ValorFinalDiv = styled.div`
  background-color: #e66767;
  display: flex;
  justify-content: space-between;
`

export const ValorTotal = styled.p`
  color: #ffff;
  font-weight: 700;
  font-size: 14px;
  color: #ffff;
`

export const ValorDoPedido = styled.p`
  color: #ffff;
  font-weight: 700;
  font-size: 14px;
  color: #ffff;
`

export const BotaoVoltar = styled.button`
  background-color: #fff;
  color: #e66767;
  border: none;
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  margin: 0.8rem auto;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

export const BotaoContinuarAsCompras = styled.button`
  background-color: #fff;
  color: #e66767;
  border: none;
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  margin-top: 0.8rem;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

export const CardItemNoCarrinho = styled.div`
  background-color: #ffebd9;
  display: flex;
  margin-bottom: 1rem;
  height: 100px;
  width: 100%;
  position: relative;
`

export const Imagem = styled.div`
  margin: 0.5rem;

  img {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 500px) {
    img {
      width: 100px;
      height: 100%;
  }
  }
`

export const DetalhesDoPrato = styled.div`
  display: flex;
  flex-direction: column;
`

export const NomeDoPrato = styled.div`
  margin: 0.5rem 0 0 0.5rem;
  color: #e66767;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 500px) {
    font-size: 14px;
    margin: 0.5rem 0 0 0;
  }
`

export const ValorDoPrato = styled.div`
  margin-top: 0.2rem;
  font-weight: 400;
  font-size: 16px;
  padding: 0px 8px;
  color: #e66767;

  @media (max-width: 500px) {
    margin: 0;
    font-size: 14px;
    padding: 0;
  }
`

export const BotaoRemoverItemCarrinho = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`

export const EmptyCart = styled.p`
  color: white;
  margin-bottom: 1rem;
`

export const Quantidade = styled.p`
  color: #ee6676;
  margin-left: 0.5rem;
  margin-top: 0.5rem;

  span {
    font-weight: bold
  }

  @media (max-width: 500px) {
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`
