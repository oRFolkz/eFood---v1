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
  cardapio: CardapioItem[]
  foto: string
  preco: number
  porcao: number
}

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export function API() {
  const [restaurantesAPI, setRestaurantesAPI] = useState<Restaurante[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
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
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { restaurantesAPI, isLoading, error }
}

export default API
