import { ListagemSection } from './styles'
import Home from '../HomeProdutos'
import Hero from '../../../Hero'
import Rodape from '../../../Rodape'

function ListagemHome() {
  return (
    <>
      <Hero />
      <ListagemSection>
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
      </ListagemSection>
      <Rodape />
    </>
  )
}

export default ListagemHome
