import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
`

export const CardRestaurantes = styled.div`
  color: #e66767;
  border: 1px solid #e66767;
  width: 450px;
  height: 520px;
  position: relative;

  @media (max-width: 500px) {
    height: auto;
    margin: 0 1rem;
    padding-bottom: 1rem;
  }
`

export const CardLoop = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 1rem 0;
`
export const Imagem = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    max-width: 480px;
    height: 300px;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      transform: scale(1.2);
      filter: brightness(0.7);
    }
  }
`
export const NomeDoPrato = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 5px 8px;
`
export const DetalhesDoPrato = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`
export const Nota = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 5px 8px;
  img {
    padding-left: 0.2rem;
    height: 16px;
  }
`
export const DescricaoDoPrato = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 0px 8px;
  margin-bottom: 20px;
`

export const TagsContainer = styled.div`
  color: white;
  display: flex;
  gap: 1rem;
  position: absolute;
  top: 0px;
  right: 10px;
`

export const TagsTipo = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 700;
  align-text: center;
  background-color: #e66767;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`

export const TagsDestaque = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 700;
  align-text: center;
  background-color: #e66767;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid transparent;
  display: none;

  &.visible {
    display: flex;
  }

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`

export const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const StyledLinkSaibaMais = styled.a`
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: #e66767;
  padding: 8px;
  margin: 10px 0 0 10px;
  cursor: pointer;
`
