import { ListagemSection } from './styles'
import BannerProduto from '../BannerProduto'
import PaginaProduto from '../PaginaProdutoHome'
import HeroProduto from '../HeroProduto'
import Rodape from '../../../Rodape'

function ListagemPaginaProduto() {
  return (
    <>
      <HeroProduto />
      <BannerProduto />
      <ListagemSection>
        <PaginaProduto />
        <PaginaProduto />
        <PaginaProduto />
        <PaginaProduto />
        <PaginaProduto />
        <PaginaProduto />
      </ListagemSection>
      <Rodape />
    </>
  )
}

export default ListagemPaginaProduto
