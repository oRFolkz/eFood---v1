import {
  RestauranteStyled,
  Imagem,
  DetalhesDoPrato,
  NomeDoPrato,
  DescricaoDoPrato,
  StyledButton
} from './styles'

import imagemPrato from '../../../imgs/Pratos/imagemPrato3.png'

interface PratosDiversosProps {
  setDetailIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const PratosDiversos: React.FC<PratosDiversosProps> = ({
  setDetailIsVisible
}) => {
  return (
    <>
      <RestauranteStyled>
        <Imagem onClick={() => setDetailIsVisible(true)}>
          <img src={imagemPrato} alt="Pizza Marguerita" />
        </Imagem>
        <DetalhesDoPrato>
          <NomeDoPrato>Pizza Marguerita</NomeDoPrato>
          <DescricaoDoPrato>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </DescricaoDoPrato>
          <StyledButton>Adicionar ao carrinho</StyledButton>
          <StyledButton onClick={() => setDetailIsVisible(true)}>
            Ver detalhes do prato
          </StyledButton>
        </DetalhesDoPrato>
      </RestauranteStyled>
      <RestauranteStyled>
        <Imagem onClick={() => setDetailIsVisible(true)}>
          <img src={imagemPrato} alt="Pizza Marguerita" />
        </Imagem>
        <DetalhesDoPrato>
          <NomeDoPrato>Pizza Marguerita</NomeDoPrato>
          <DescricaoDoPrato>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </DescricaoDoPrato>
          <StyledButton>Adicionar ao carrinho</StyledButton>
          <StyledButton onClick={() => setDetailIsVisible(true)}>
            Ver detalhes do prato
          </StyledButton>
        </DetalhesDoPrato>
      </RestauranteStyled>
    </>
  )
}

export default PratosDiversos
