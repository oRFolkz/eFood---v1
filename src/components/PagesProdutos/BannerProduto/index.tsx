import { Banner, NomeDoProduto, TagDoProduto, MaxWidth } from './styles'
import API from '../../API/api'
import { useRestaurant } from '../../Providers/RestauranteIDProvider/RestauranteIDProvider'
import { useEffect, useState } from 'react'

function BannerProduto() {
  const { restaurantesAPI } = API()
  const { idRestaurante } = useRestaurant()
  const [tipoDoRestaurante, setTipoDoRestaurante] = useState<string>('')

  useEffect(() => {
    if (restaurantesAPI.length > 0) {
      const grabTipoDoRestaurante = restaurantesAPI[(Number(idRestaurante) - 1)].tipo
      setTipoDoRestaurante(grabTipoDoRestaurante)
    }
  }, [restaurantesAPI, tipoDoRestaurante])

  return (
    <Banner>
      <MaxWidth>
        <TagDoProduto>{tipoDoRestaurante ? tipoDoRestaurante : '...'}</TagDoProduto>
        <NomeDoProduto>La dolce vita trattoria</NomeDoProduto>
      </MaxWidth>
    </Banner>
  )
}

export default BannerProduto
