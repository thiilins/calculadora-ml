import styled, { css } from 'styled-components'

export const MainContentContainer = styled.div`
  ${({ theme }) => css`
    grid-area: CT;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.background};
  `}
`
