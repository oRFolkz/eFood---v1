import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'

/* import Carrinho from './components/Pages/Carrinho/Carrinho' */
import './index.css'
import PratosItalianos from './components/Pages/PaginaProduto/PratosItalianos'
import PratosJaponeses from './components/Pages/PaginaProduto/PratosJaponeses'
import Home from './components/Pages/Home'
/* import DadosEntrega from './components/Pages/DadosEntrega' */
/* import ConfirmacaoPagamento from './components/Pages/ConfirmacaoPagamento' */
/* import PedidoRealizado from './components/Pages/PedidoRealizado' */

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italiana" element={<PratosItalianos />} />
    <Route path="/japonesa" element={<PratosJaponeses />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      {/* <DadosEntrega /> */}
      {/* <ConfirmacaoPagamento /> */}
      {/* <PedidoRealizado /> */}
    </BrowserRouter>
  )
}

export default App
