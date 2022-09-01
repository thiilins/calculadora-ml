import styled, { css } from 'styled-components'

export const MainHeaderContainer = styled.div`
  ${({ theme }) => css`
    grid-area: HD;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    padding: 1rem 2rem;
    font-family: ${theme.fonts.family.harabara_mais};
  `}
`
export const MainLogoContainer = styled.div`
  ${({ theme }) => css`
    svg {
      width: 150px;
    }
  `}
`
