import styled from 'styled-components'

export const RestauranteStyled = styled.div`
  color: #ffff;
  background-color: #e66767;
  width: 32%;
  position: relative;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    height: 450px;
    margin: 0 1rem;
  }
`
export const Imagem = styled.div`
  margin: 0.5rem 0.5rem 0 0.5rem;

  img {
    width: 100%;
    max-width: 480px;
    height: 220px;
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
`
export const BotaoAddCarrinho = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin: 10px 8px;
  padding: 8px 0;
  color: #e66767;
  background-color: #ffff;

  &:hover {
    transform: scale(1.03);
    color: #e66767;
    cursor: pointer;
  }
`
