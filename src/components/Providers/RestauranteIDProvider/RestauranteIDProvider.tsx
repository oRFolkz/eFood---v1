import { createContext, ReactNode, useContext, useState } from 'react'

type RestaurantContextType = {
  idRestaurante: number | null
  setIdRestaurante: (id: number | null) => void
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined)

export const RestaurantProvider = ({ children }: { children: ReactNode }) => {
  const [idRestaurante, setIdRestaurante] = useState<number | null>(Number)

  return (
    <RestaurantContext.Provider value={{ idRestaurante, setIdRestaurante }}>
      {children}
    </RestaurantContext.Provider>
  )
}

export const useRestaurant = () => {
  const context = useContext(RestaurantContext)

  if (context === undefined) {
    throw new Error('useRestaurant must be used within a RestaurantProvider')
  }

  return context
}
