import styled, { css } from 'styled-components'

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    position: relative;
    grid-template-columns: 100vw;
    grid-template-rows: 72px auto;
    grid-template-areas:
      'HD HD HD'
      'CT CT CT';
    overflow-y: auto;
    min-width: 100vw;
    min-height: 100vh;
  `}
`
