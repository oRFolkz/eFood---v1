import React from 'react'
import { Banner, NomeDoProduto, TagDoProduto, MaxWidth } from './styles'
import { useParams } from 'react-router-dom'

function BannerProduto() {
  const { title } = useParams()
  const tipo = String(title).toLocaleUpperCase()
  return (
    <Banner>
      <MaxWidth>
        <TagDoProduto>{tipo}</TagDoProduto>
        <NomeDoProduto>La dolce vita trattoria</NomeDoProduto>
      </MaxWidth>
    </Banner>
  )
}

export default BannerProduto
