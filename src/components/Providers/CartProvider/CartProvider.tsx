import React, { createContext, useContext, useState, ReactNode } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
  image: string
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  total: number
  emptyCart: () => void
};

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item])
    setTotal((prevTotal) => prevTotal + item.price)
  };

  const emptyCart = () => {
    setCart([]);    // Reset the cart to an empty array
    setTotal(0);    // Reset the total to zero
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, emptyCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context;
};
