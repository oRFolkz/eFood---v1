import { createContext, ReactNode, useContext, useState, useEffect } from 'react'

type RestaurantContextType = {
  idRestaurante: number | null
  setIdRestaurante: (id: number | null) => void
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined)

export const RestaurantProvider = ({ children }: { children: ReactNode }) => {
  const [idRestaurante, setIdRestaurante] = useState<number | null>(null)

  // Recuperando o ID armazenado no localStorage ao carregar a página
  useEffect(() => {
    const storedId = localStorage.getItem('idRestaurante')
    if (storedId) {
      setIdRestaurante(Number(storedId))
    }
  }, [])

  // Armazenando o ID no localStorage sempre que ele mudar
  useEffect(() => {
    if (idRestaurante !== null) {
      localStorage.setItem('idRestaurante', String(idRestaurante))
    }
  }, [idRestaurante])

  return (
    <RestaurantContext.Provider value={{ idRestaurante, setIdRestaurante }}>
      {children}
    </RestaurantContext.Provider>
  )
}

export const useRestaurant = () => {
  const context = useContext(RestaurantContext)

  if (context === undefined) {
    throw new Error('Erro useRestaurant')
  }

  return context
}
