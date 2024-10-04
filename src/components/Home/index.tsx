import {
  CardRestaurantes,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  Nota,
  DescricaoDoPrato,
  TagsTipo,
  TagsDestaque,
  TagsContainer,
  StyledLink,
  StyledLinkSaibaMais,
  Container,
  CardLoop
} from './styles'

import { useNavigate } from 'react-router-dom'

import Rodape from '../Rodape'
import Cabecalho from '../Cabecalho'
import estrela from '../imgs/estrela.png'
import API from '../API/api'

export function Home() {
  const navigate = useNavigate()
  const { restaurantesAPI } = API()

  const OnClickCheckID = (id: string | number) => {
    localStorage.setItem('selectedRestaurante', id.toString())
    if (typeof id === 'string') {
      id = id
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      return navigate(`/${id}`)
    }
    const turnIdToType1 = restaurantesAPI[Number(id) - 1].tipo
    const turnIdToType2 = turnIdToType1
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    navigate(`/${turnIdToType2}`)
  }

  return (
    <Container>
      <Cabecalho />
      <CardLoop>
        {restaurantesAPI.map((restaurantes) => (
          <CardRestaurantes key={restaurantes.id}>
            <Imagem onClick={() => OnClickCheckID(restaurantes.id)}>
              <StyledLink>
                <img src={restaurantes.capa} alt="Capa do Restaurante" />
              </StyledLink>
            </Imagem>
            <DetalhesDoPrato>
              <NomeDoPrato>
                {restaurantes.titulo}
                <Nota>
                  {restaurantes.avaliacao}
                  <img src={estrela} alt="Pontuação do restaurante" />
                </Nota>
              </NomeDoPrato>
              <DescricaoDoPrato>{restaurantes.descricao}</DescricaoDoPrato>
              <StyledLinkSaibaMais
                onClick={() => OnClickCheckID(restaurantes.id)}
              >
                Ver mais pratos do restaurante
              </StyledLinkSaibaMais>
              <TagsContainer>
                <StyledLink>
                  <TagsDestaque
                    className={restaurantes.destacado ? 'visible' : ''}
                    onClick={() => OnClickCheckID('destaques')}
                  >
                    Destaque da Semana
                  </TagsDestaque>
                </StyledLink>
                <StyledLink>
                  <TagsTipo onClick={() => OnClickCheckID(restaurantes.tipo)}>
                    {restaurantes.tipo}
                  </TagsTipo>
                </StyledLink>
              </TagsContainer>
            </DetalhesDoPrato>
          </CardRestaurantes>
        ))}
      </CardLoop>
      <Rodape />
    </Container>
  )
}

export default Home
