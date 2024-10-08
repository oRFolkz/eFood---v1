import React from 'react'
import { HeroSection, TextoApresentacao, Logo } from './styles'
import logo from '../imgs/Logo/logo.png'

function Cabecalho() {
  return (
    <HeroSection>
      <Logo>
        <img src={logo} alt="Imagem da Logo" />
      </Logo>
      <TextoApresentacao>
        Viva experiências gastronômicas no conforto da sua casa
      </TextoApresentacao>
    </HeroSection>
  )
}

export default Cabecalho
