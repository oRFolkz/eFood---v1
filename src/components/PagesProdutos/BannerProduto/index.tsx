import { Banner, NomeDoProduto, TagDoProduto, MaxWidth } from './styles'

function BannerProduto() {
  return (
    <Banner>
      <MaxWidth>
        <TagDoProduto>Teste</TagDoProduto>
        <NomeDoProduto>Teste</NomeDoProduto>
      </MaxWidth>
    </Banner>
  )
}

export default BannerProduto
