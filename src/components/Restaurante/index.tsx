import {
  RestauranteStyled,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  Nota,
  DescricaoDoPrato,
  BotãoSaibaMais,
  Tags,
  Destaque,
  Categoria
} from './styles'

import imagemPrato from '../imgs/Pratos/imagemPrato.png'
import estrela from '../imgs/estrela.png'

function Restaurante() {
  return (
    <RestauranteStyled>
      <Imagem>
        <img src={imagemPrato} alt="" />
      </Imagem>
      <DetalhesDoPrato>
        <NomeDoPrato>
          Hioki Sushi
          <Nota>
            4.9
            <img src={estrela} alt="" />
          </Nota>
        </NomeDoPrato>
        <DescricaoDoPrato>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </DescricaoDoPrato>
        <BotãoSaibaMais>Saiba mais</BotãoSaibaMais>
        <Tags>
          <Destaque>Destaque da Semana</Destaque>
          <Categoria>Japonesa</Categoria>
        </Tags>
      </DetalhesDoPrato>
    </RestauranteStyled>
  )
}

export default Restaurante
