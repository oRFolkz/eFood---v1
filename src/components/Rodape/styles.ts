import styled from 'styled-components'
import heroBackground from '../imgs/HeroBackground/Vector.png'
import { Link } from 'react-router-dom'

export const RodapeSection = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(${heroBackground});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Logo = styled(Link)`
  padding-top: 2rem;
  width: 125px;
  height: 60px;
  cursor: pointer;
`

export const IconesRedesSociais = styled.div`
  width: 24px;
  height: 24px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`

export const TextoRodape = styled.h5`
  color: #e66767;
  margin: 0 auto;
  max-width: 460px;
  max-height: 24px;
  text-align: center;
  font-weight: 400;
  font-family: Roboto;
  font-size: 10px;
  margin-bottom: 2rem;

  @media (max-width: 460px) {
    max-width: 360px;
  }
`
