import { Banner, NomeDoProduto, TagDoProduto, MaxWidth } from './styles'

function BannerProduto() {
  return (
    <Banner>
      <MaxWidth>
        <TagDoProduto>Italiana</TagDoProduto>
        <NomeDoProduto>La Dolce Vita Trattoria</NomeDoProduto>
      </MaxWidth>
    </Banner>
  )
}

export default BannerProduto
