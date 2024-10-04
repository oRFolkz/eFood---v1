import { useEffect, useState } from 'react'

export interface Restaurante {
  id: number
  avaliacao: number
  nome: string
  capa: string
  tipo: string
  titulo: string
  descricao: string
  destacado: boolean
  cardapio: string
  foto: string
  preco: number
  porcao: number
}

export function API() {
  const [restaurantesAPI, setRestaurantesAPI] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados')
        }
        return response.json()
      })
      .then((data: Restaurante[]) => {
        setRestaurantesAPI(data)
      })
  }, [])

  return { restaurantesAPI }
}

export default API
