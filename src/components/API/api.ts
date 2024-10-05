import { useEffect, useState } from 'react'

export interface CardapioItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

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
