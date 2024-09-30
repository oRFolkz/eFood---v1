import {
  CardRestaurantes,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  Nota,
  DescricaoDoPrato,
  Tags,
  TagsContainer,
  StyledLink,
  StyledLinkSaibaMais,
  Container
} from './styles'

import Rodape from '../../Rodape'
import Cabecalho from '../../Cabecalho'

import Japones from '../../imgs/restauranteJapones/restauranteJapones.jpg'
import Italiano from '../../imgs/restauranteItaliano/restauranteItaliano.jpg'
import estrela from '../../imgs/estrela.png'

function Home() {
  return (
    <Container>
      <Cabecalho />
      <CardRestaurantes>
        {/* Japones */}
        <Imagem>
          <StyledLink to="/japonesa">
            <img src={Japones} alt="" />
          </StyledLink>
        </Imagem>
        <DetalhesDoPrato>
          <NomeDoPrato>
            Restaurante Japones
            <Nota>
              4.9
              <img src={estrela} alt="" />
            </Nota>
          </NomeDoPrato>
          <DescricaoDoPrato>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade garantida.
            Experimente o Japão sem sair do lar com nosso delivery!
          </DescricaoDoPrato>
          <StyledLinkSaibaMais to="/japonesa">
            Ver pratos Japoneses
          </StyledLinkSaibaMais>
          <TagsContainer>
            <StyledLink to="/destaques">
              <Tags>Destaque da Semana</Tags>
            </StyledLink>
            <StyledLink to="/japonesa">
              <Tags>Japonesa</Tags>
            </StyledLink>
          </TagsContainer>
        </DetalhesDoPrato>
      </CardRestaurantes>
      <CardRestaurantes>
        {/* Italiano */}
        <Imagem>
          <StyledLink to="/italiana">
            <img src={Italiano} alt="" />
          </StyledLink>
        </Imagem>
        <DetalhesDoPrato>
          <NomeDoPrato>
            Restaurante Italiano
            <Nota>
              4.5
              <img src={estrela} alt="" />
            </Nota>
          </NomeDoPrato>
          <DescricaoDoPrato>
            Peça já o melhor da culinária Italiana no conforto da sua casa!
            Pizzas, Baguettes e pratos quentes irresistíveis. Entrega rápida,
            embalagens cuidadosas e qualidade garantida. Experimente a Italia
            sem sair do lar com nosso delivery!
          </DescricaoDoPrato>
          <StyledLinkSaibaMais to="/italiana">
            Ver pratos Italianos
          </StyledLinkSaibaMais>
          <TagsContainer>
            <StyledLink to="/destaques">
              <Tags>Destaque da Semana</Tags>
            </StyledLink>
            <StyledLink to="/italiana">
              <Tags>Italiana</Tags>
            </StyledLink>
          </TagsContainer>
        </DetalhesDoPrato>
      </CardRestaurantes>
      <Rodape />
    </Container>
  )
}

export default Home
