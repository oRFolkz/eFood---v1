import styled from 'styled-components'
import heroBackground from '../imgs/HeroBackground/Vector.png'

export const HeroSection = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${heroBackground});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 580px) {
    height: 300px;
  }
`

export const Logo = styled.div`
  padding-top: 2rem;
  width: 125px;
  height: 60px;
`

export const TextoApresentacao = styled.h1`
  color: #e66767;
  max-width: 580px;
  height: 100px;
  margin: auto;
  text-align: center;
  font-weight: 900;
  font-family: Roboto;
  font-size: 36px;
  line-height: 42px;
  padding-top: 2rem;

  @media (max-width: 425px) {
    font-size: 28px;
    width: 80%;
  }
  @media (max-width: 350px) {
    padding-top: 0rem;
  }
`
