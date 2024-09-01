import styled from 'styled-components'

export const Dark = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.6);
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
  z-index: 20;

  @media (max-width: 500px) {
    height: 450px;
    margin: 0 1rem;
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

export const BotaoEntrega = styled.button`
  background-color: #fff;
  color: #e66767;
  border: none;
  width: 100%;
  padding: 0.5rem;
  margin: auto;
  font-size: 14px;
  font-weight: 700;
`