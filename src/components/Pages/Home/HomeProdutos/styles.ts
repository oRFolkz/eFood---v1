import styled from 'styled-components'

export const RestauranteStyled = styled.div`
  color: #e66767;
  border: 1px solid #e66767;
  width: 480px;
  height: 400px;
  position: relative;

  @media (max-width: 500px) {
    height: 450px;
    margin: 0 1rem;
  }
`
export const Imagem = styled.div`
  img {
    width: 100%;
    max-width: 480px;
    height: 220px;
  }
`
export const NomeDoPrato = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 5px 8px;
`
export const DetalhesDoPrato = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`
export const Nota = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 5px 8px;
  img {
    padding-left: 0.2rem;
    height: 16px;
  }
`
export const DescricaoDoPrato = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 0px 8px;
`
export const BotãoSaibaMais = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin: 5px 8px;
  padding-top: 5px;
  width: 82px;
  height: 24px;
  color: white;
  background-color: #e66767;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #e66767;
    background-color: white;
    color: #e66767;
    cursor: pointer;
  }
`

export const Tags = styled.div`
  color: white;
  display: flex;
  gap: 1rem;
  position: absolute;
  top: 0px;
  right: 10px;
`

export const Destaque = styled.p`
  font-size: 12px;
  font-weight: 700;
  align-text: center;
  background-color: #e66767;
  padding: 5px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`

export const Categoria = styled.p`
  font-size: 12px;
  font-weight: 700;
  align-text: center;
  background-color: #e66767;
  padding: 5px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`
