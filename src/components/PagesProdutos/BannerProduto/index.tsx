import { Banner, NomeDoProduto, TagDoProduto, MaxWidth } from './styles'
import { useParams } from 'react-router-dom'

function BannerProduto() {
  const { title } = useParams()

  return (
    <Banner>
      <MaxWidth>
        <TagDoProduto>{title}</TagDoProduto>
        <NomeDoProduto>La dolce vita trattoria</NomeDoProduto>
      </MaxWidth>
    </Banner>
  )
}

export default BannerProduto
