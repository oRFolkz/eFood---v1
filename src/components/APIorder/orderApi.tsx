import React, { createContext, useContext, useState } from 'react'

interface Product {
  id: number
  price: number
}

interface Address {
  description: string
  city: string
  zipCode: number
  number: number
  complement?: string
}

interface Delivery {
  receiver: string
  address: Address
}

interface Payment {
  card?: Card
}

interface Card {
  name: string
  number: number
  code: number
  expires: {
    month: number
    year: number
  }
}

interface OrderContextType {
  products: Product[]
  delivery: Delivery | null
  payment: Payment | null
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  setDelivery: React.Dispatch<React.SetStateAction<Delivery | null>>
  setPayment: React.Dispatch<React.SetStateAction<Payment | null>>
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [delivery, setDelivery] = useState<Delivery | null>(null)
  const [payment, setPayment] = useState<Payment | null>(null)

  return (
    <OrderContext.Provider
      value={{
        products,
        delivery,
        payment,
        setProducts,
        setDelivery,
        setPayment,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrderContext must be used within an OrderProvider')
  }
  return context
}
