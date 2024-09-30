import styled from 'styled-components'

export const CardItemNoCarrinho = styled.div`
  background-color: #ffebd9;
  display: flex;
  margin-bottom: 1rem;
  height: 120px;
`

export const Imagem = styled.div`
  margin: 0.5rem;

  img {
    width: 100px;
    height: 100px;
  }
`
export const NomeDoPrato = styled.div`
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  margin-top: 1rem;
`
export const DetalhesDoPrato = styled.div`
  color: #e66767;
  margin: 0rem 0rem 0 0.5rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  width: 100%;
  position: relative;
`

export const DescricaoDoPrato = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 0.5rem 0 0 0;
`
export const BotaoRemoverItemCarrinho = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`
