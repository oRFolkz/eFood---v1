import { Banner, NomeDoProduto, TagDoProduto, MaxWidth } from './styles'

function BannerProduto() {
  return (
    <Banner>
      <MaxWidth>
        <TagDoProduto>Japonesa</TagDoProduto>
        <NomeDoProduto>ラ ドルチェ ヴィータ トラットリア</NomeDoProduto>
      </MaxWidth>
    </Banner>
  )
}

export default BannerProduto
