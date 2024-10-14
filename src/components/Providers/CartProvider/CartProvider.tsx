import { createContext, useContext, useState, ReactNode } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  total: number
  emptyCart: () => void
  removeItemFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        // Update quantity if the item already exists
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        // Add new item with quantity 1 if it doesn't exist
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })

    setTotal((prevTotal) => prevTotal + item.price)
  }

  const emptyCart = () => {
    setCart([])
    setTotal(0)
  }

  const removeItemFromCart = (id: number) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((cartItem) => cartItem.id === id)
      if (!itemToRemove) return prevCart

      if (itemToRemove.quantity > 1) {
        // Decrease quantity if more than one
        return prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      } else {
        // Remove item if only one instance
        return prevCart.filter((cartItem) => cartItem.id !== id)
      }
    })

    setTotal((prevTotal) => {
      const itemToRemove = cart.find((cartItem) => cartItem.id === id)
      return itemToRemove ? prevTotal - itemToRemove.price : prevTotal
    })
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, emptyCart, removeItemFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
