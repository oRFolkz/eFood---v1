/* import Carrinho from './components/Pages/Carrinho/Carrinho' */
import './index.css'
import ListagemPaginaProduto from './components/Pages/PaginaProduto/ListagemPaginaProduto'
import ItemEmDestaque from './components/Pages/ItemEmDestaque'
import Listagem from './components/Pages/Home/ListagemHome'

function App() {
  return (
    <body className="body">
      <Listagem />
      <ListagemPaginaProduto />
      <ItemEmDestaque />
      {/* <Carrinho /> */}
    </body>
  )
}

export default App
