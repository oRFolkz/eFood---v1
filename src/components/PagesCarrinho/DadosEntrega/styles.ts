import styled from 'styled-components'

export const CardDadosEntrega = styled.div`
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 1rem;
  height: 100px;
  background-color: #e66767;
  width: 360px;
  height: 100%;
  margin: auto;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;

  &.visible {
    display: none;
  }
`

export const TextoEntrega = styled.p`
  margin: 0.8rem 0 0.2rem 0;
`

export const TextaAreaNome = styled.input.attrs({
  type: 'text'
})`
  border: none;
  background-color: #ffebd9;
  width: 100%;
  height: 30px;
  font-weight: 700;
  font-size: 16px;
  color: #4b4b4b;
  padding: 0 0 0 1rem;
  resize: none;
`

export const TextaAreaEndereco = styled.input.attrs({
  type: 'text'
})`
  border: none;
  background-color: #ffebd9;
  margin: auto;
  width: 100%;
  height: 30px;
  font-weight: 700;
  font-size: 16px;
  color: #4b4b4b;
  padding: 0 0 0 1rem;
  resize: none;
`

export const TextaAreaCidade = styled.input.attrs({
  type: 'text'
})`
  border: none;
  background-color: #ffebd9;
  margin: auto;
  width: 100%;
  height: 30px;
  font-weight: 700;
  font-size: 16px;
  color: #4b4b4b;
  padding: 0 0 0 1rem;
  resize: none;
`

export const TextaAreaCEP = styled.input.attrs({
  type: 'text'
})`
  border: none;
  background-color: #ffebd9;
  margin: auto;
  width: 70%;
  height: 30px;
  font-weight: 700;
  font-size: 16px;
  color: #4b4b4b;
  padding: 0 0 0 1rem;
  resize: none;
`

export const TextaAreaNumero = styled.input.attrs({
  type: 'text'
})`
  border: none;
  background-color: #ffebd9;
  margin: auto;
  width: 100%;
  height: 30px;
  font-weight: 700;
  font-size: 16px;
  color: #4b4b4b;
  padding: 0 0 0 1rem;
  resize: none;
`

export const TextaAreaComplemento = styled.input.attrs({
  type: 'text'
})`
  border: none;
  background-color: #ffebd9;
  margin: auto;
  width: 100%;
  height: 30px;
  font-weight: 700;
  font-size: 16px;
  color: #4b4b4b;
  padding: 0 0 0 1rem;
  resize: none;
`

export const BotaoContinuar = styled.button`
  width: 100%;
  height: 40px;
  color: #e66767;
  font-weight: 700;
  font-size: 14px;
  border: none;
  padding: 0.3rem 0;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
`
export const BotaoVoltar = styled.button`
  width: 100%;
  height: 40px;
  color: #e66767;
  font-weight: 700;
  font-size: 14px;
  border: none;
  padding: 0.3rem 0;
  cursor: pointer;
`

export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const TextAlign = styled.div`
  text-align: end;aa
`
