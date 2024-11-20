import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'

import './index.css'
import Home from './components/Home'
import PratosDiversos from './components/PagesProdutos/PratosDiversos'
import Rodape from './components/Rodape'
import RestaurantesEmDestaque from './components/Home/restauratesEmDestaque'
import { RestaurantProvider } from './components/Providers/RestauranteIDProvider/RestauranteIDProvider'
import { CartProvider } from './components/Providers/CartProvider/CartProvider'
import { OrderProvider } from './components/APIorder/orderApi'
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:title" element={<PratosDiversos />} />
    <Route path="/destaque" element={<RestaurantesEmDestaque />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <RestaurantProvider>
        <OrderProvider>
          <CartProvider>
            <GlobalCss />
            <Rotas />
            <Rodape />
          </CartProvider>
        </OrderProvider>
      </RestaurantProvider>
    </BrowserRouter>
  )
}

export default App
