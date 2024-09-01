/* import Carrinho from './components/Pages/Carrinho/Carrinho' */
import './index.css'
/* import ListagemPaginaProduto from './components/Pages/PaginaProduto/ListagemPaginaProduto' */
import ItemEmDestaque from './components/Pages/ItemEmDestaque'
import ListagemHome from './components/Pages/Home/ListagemHome'

function App() {
  return (
    <body className="body">
      <ListagemHome />
      {/* <ListagemPaginaProduto /> */}
      <ItemEmDestaque />
      {/* <Carrinho /> */}
    </body>
  )
}

export default App
