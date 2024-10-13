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
  CardLoop,
  MsgErro,
  LinkToDestaque
} from './styles'

import API from '../API/api'
import { useNavigate } from 'react-router-dom'
import estrela from '../imgs/estrela.png'
import Cabecalho from '../Cabecalho'
import { useRestaurant } from '../Providers/RestauranteIDProvider/RestauranteIDProvider'

export function Home() {
  const navigate = useNavigate()
  const { restaurantesAPI } = API()
  const { setIdRestaurante } = useRestaurant()

  const OnClickGrabID = (id: number | string) => {
    const numericID = (Number(id))
    setIdRestaurante(numericID)

    if (typeof id === 'string') {
      id = id
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      return navigate(`/${id}`)
    }
    const turnIdToType1 = restaurantesAPI[numericID - 1]?.tipo || ''
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
      {restaurantesAPI.length > 0 ? (
        restaurantesAPI.map((restaurantes) => (
          <CardRestaurantes key={restaurantes.id}>
            <Imagem onClick={() => OnClickGrabID(restaurantes.id)}>
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
                onClick={() => OnClickGrabID(restaurantes.id)}
              >
                Ver mais pratos do restaurante
              </StyledLinkSaibaMais>
              <TagsContainer>
                <StyledLink>
                  <LinkToDestaque to='/destaque'>
                    <TagsDestaque className={restaurantes.destacado ? 'visible' : ''}>
                      Destaque da Semana
                    </TagsDestaque>
                  </LinkToDestaque>
                </StyledLink>
                <StyledLink>
                  <TagsTipo onClick={() => OnClickGrabID(restaurantes.id)}>
                    {restaurantes.tipo}
                  </TagsTipo>
                </StyledLink>
              </TagsContainer>
            </DetalhesDoPrato>
          </CardRestaurantes>
        ))
      ) : (
        <MsgErro>Carregando restaurantes...</MsgErro>
      )}
      </CardLoop>
    </Container>
  )
}

export default Home
