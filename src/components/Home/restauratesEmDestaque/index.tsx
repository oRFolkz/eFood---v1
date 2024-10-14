import {
  NomeDoPrato,
  DetalhesDoPrato,
  DescricaoDoPrato,
  Imagem,
  LoadingMsg,
  CardRestaurantes,
  Nota,
  TagsTipo,
  TagsDestaque,
  TagsContainer,
  StyledLink,
  StyledLinkSaibaMais,
  CardLoop
} from '../styles'

import API from '../../API/api'
import estrela from '../../imgs/estrela.png'
import Cabecalho from '../../Cabecalho'
import { useNavigate } from 'react-router-dom'
import { useRestaurant } from '../../Providers/RestauranteIDProvider/RestauranteIDProvider'

const RestaurantesEmDestaque = () => {
  const { restaurantesAPI } = API()
  const navigate = useNavigate()
  const { setIdRestaurante } = useRestaurant()

  const OnClickCheckID = (id: number | string) => {
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
    <>
      <Cabecalho />
      <CardLoop>
        {restaurantesAPI.length > 0 ? (
          restaurantesAPI.map((restaurante) => (
          <CardRestaurantes
          key={restaurante.id}
          className={restaurante.destacado ? '' : 'hideDestaque'}>
            <Imagem onClick={() => OnClickCheckID(restaurante.id)}>
              <StyledLink>
                <img src={restaurante.capa} alt="Capa do Restaurante" />
              </StyledLink>
            </Imagem>
            <DetalhesDoPrato>
              <NomeDoPrato>
                {restaurante.titulo}
                <Nota>
                  {restaurante.avaliacao}
                  <img src={estrela} alt="Pontuação do restaurante" />
                </Nota>
              </NomeDoPrato>
              <DescricaoDoPrato>{restaurante.descricao}</DescricaoDoPrato>
              <StyledLinkSaibaMais onClick={() => OnClickCheckID(restaurante.id)}>
                Ver mais pratos do restaurante
              </StyledLinkSaibaMais>
              <TagsContainer>
                <StyledLink>
                  <TagsDestaque>
                    Destaque da Semana
                  </TagsDestaque>
                </StyledLink>
                <StyledLink>
                  <TagsTipo onClick={() => OnClickCheckID(restaurante.id)}>
                    {restaurante.tipo}
                  </TagsTipo>
                </StyledLink>
              </TagsContainer>
            </DetalhesDoPrato>
          </CardRestaurantes>
          ))
        ) : ( <LoadingMsg>Carregando Restaurantes....</LoadingMsg> )}
      </CardLoop>
      </>
  )
}

export default RestaurantesEmDestaque
