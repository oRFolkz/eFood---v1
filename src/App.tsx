import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'

import './index.css'
import Home from './components/Home'
import PratosDiversos from './components/PagesProdutos/PratosDiversos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:title" element={<PratosDiversos />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
